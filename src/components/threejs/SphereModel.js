import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'; // Import useThree here
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const SphereBlob = ({ onClick }) => {
  const meshRef = useRef();
  const cubeRef = useRef();
  const wireframeMeshRef = useRef();
  const { camera } = useThree();  // Get the camera from useThree
  const [hovered, setHovered] = useState(false);

  // ... (rest of your code)

  useFrame(() => {
    // ... (existing animation logic)

    // Add this to control the cube's visibility
    if (camera.position.z < 1) {  // Adjust this value as needed
      if (cubeRef.current) {
        cubeRef.current.visible = true;
      }
    } else {
      if (cubeRef.current) {
        cubeRef.current.visible = false;
      }
    }
  });

  return (
    <>
      {/* ... (existing blob mesh and wireframe mesh) */}
      {/* Add the cube with different colors on each side */}
      <mesh ref={cubeRef} position={[0, 0, 2]}>
        {/* ... (cube material setup remains the same) */}
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
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default SphereModelBlob;
