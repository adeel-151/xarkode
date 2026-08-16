import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    
    // Slight mouse follow effect
    const targetX = (state.mouse.x * Math.PI) / 4;
    const targetY = (state.mouse.y * Math.PI) / 4;
    
    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#2ee6c5"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
        transparent={true}
        opacity={0.3}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} color="#3b82f6" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
