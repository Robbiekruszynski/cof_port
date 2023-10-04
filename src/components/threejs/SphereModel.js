import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SphereBlob = ({ onClick }) => {
  const meshRef = useRef();
  const wireframeMeshRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const vertexShader = `
    varying vec3 vUv;
    void main() {
      vUv = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float hovered;
    varying vec3 vUv;
    void main() {
      if (hovered > 0.5) {
        gl_FragColor = vec4(vUv * 0.5 + vec3(0.0, 0.5, 0.5), 1.0);
      } else {
        gl_FragColor = vec4(vUv * 0.5 + vec3(0.5, 0.0, 0.0), 1.0);
      }
    }
  `;

  const blobGeometry = new THREE.IcosahedronGeometry(1, 2);
  const blobVertices = blobGeometry.attributes.position.array;
  for (let i = 0; i < blobVertices.length; i += 3) {
    const x = blobVertices[i];
    const y = blobVertices[i + 1];
    const z = blobVertices[i + 2];
    const scaleFactor = 1 + Math.random() * 0.3;
    blobVertices[i] = x * scaleFactor;
    blobVertices[i + 1] = y * scaleFactor;
    blobVertices[i + 2] = z * scaleFactor;
  }
  blobGeometry.computeVertexNormals();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.material.uniforms.hovered.value = hovered ? 1.0 : 0.0;
      meshRef.current.scale.set(hovered ? 1.2 : 1, hovered ? 1.2 : 1, hovered ? 1.2 : 1);
    }
    if (wireframeMeshRef.current) {
      wireframeMeshRef.current.visible = hovered;
    }
  });

  const startDragging = (e) => {
    setIsDragging(true);
    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const doDrag = (e) => {
    if (!isDragging) return;
    const xDifference = e.clientX - previousMousePosition.x;
    const yDifference = e.clientY - previousMousePosition.y;
    meshRef.current.rotation.x += yDifference * 0.01;
    meshRef.current.rotation.y += xDifference * 0.01;
    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
        onPointerDown={startDragging}
        onPointerUp={stopDragging}
        onPointerMove={doDrag}
      >
        <bufferGeometry attach="geometry" {...blobGeometry} />
        <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={{ hovered: { value: 0.0 } }} />
      </mesh>
      <mesh ref={wireframeMeshRef} visible={false}>
        <bufferGeometry attach="geometry" {...blobGeometry} />
        <meshBasicMaterial wireframe={true} color="black" scale={[0.1, 0.1, 0.1]} /> {/* Adjust the scale here */}
      </mesh>
    </>
  );
};

const SphereModelBlob = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Canvas style={{ width: '1000px', height: '1000px', cursor: 'pointer' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SphereBlob onClick={onClick} />
      </Canvas>
    </div>
  );
};

export default SphereModelBlob;
