"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

function AnimatedGrid() {
  const meshRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Animation logic
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // 1. Infinite forward motion
    meshRef.current.position.z += delta * 1; // Faster for impact
    if (meshRef.current.position.z > 10) {
      meshRef.current.position.z = 0;
    }

    // 2. Subtle Camera Parallax based on mouse
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 3 + mouse.y * 2, 0.05);
    state.camera.lookAt(0, 0, -10);
  });

  return (
    <group ref={meshRef}>
      <Plane 
        args={[200, 200, 100, 100]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, -50]}
      >
        <meshStandardMaterial 
          color="#00ffff" // BRIGHT NEON CYAN
          wireframe 
          transparent 
          opacity={0.8} 
          emissive="#00ffff"
          emissiveIntensity={1}
        />
      </Plane>
    </group>
  );
}

export default function CyberpunkGridBg() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-black">
      <Canvas
        gl={{ antialias: true, stencil: false, depth: true }}
        dpr={[1, 2]} // High quality for visibility
        camera={{ position: [0, 3, 10], fov: 60 }}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 1, 30]} />
        
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
        
        <AnimatedGrid />
      </Canvas>
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
    </div>
  );
}
