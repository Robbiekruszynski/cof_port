import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Sphere component
const Sphere = ({ onClick }) => {
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
        gl_FragColor = vec4(vUv * 0.5 + vec3(0.5, 0.0, 0.0), 1.0); // Gradient when not hovered
      }
    }
  `;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.1;
      meshRef.current.rotation.y += 0.1;
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
        <sphereGeometry args={[1, 32, 32]} />
        <shaderMaterial 
          vertexShader={vertexShader} 
          fragmentShader={fragmentShader}
          uniforms={{ hovered: { value: 0.0 } }} // Initialize with 0
        />
      </mesh>
      <mesh ref={wireframeMeshRef} visible={false}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial wireframe={true} color="white" />
      </mesh>
    </>
  );
};

// Main SphereModel component
const SphereModel = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Canvas style={{ width: '1000px', height: '1000px', cursor: 'pointer' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere onClick={onClick} />
      </Canvas>
    </div>
  );
};

export default SphereModel;














