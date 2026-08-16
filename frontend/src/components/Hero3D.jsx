import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, TorusKnot, Icosahedron, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ComplexCore() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Base rotation
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    
    // Smooth mouse parallax effect
    const targetX = (state.mouse.x * Math.PI) / 6;
    const targetY = (state.mouse.y * Math.PI) / 6;
    
    groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
    groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
        {/* Outer ethereal wireframe */}
        <Icosahedron args={[2.4, 2]} scale={1}>
          <meshBasicMaterial 
            color="#2ee6c5" 
            wireframe 
            transparent 
            opacity={0.08} 
            blending={THREE.AdditiveBlending}
          />
        </Icosahedron>

        {/* Mid-layer geometric shell */}
        <Icosahedron args={[1.6, 1]} scale={1}>
          <meshStandardMaterial 
            color="#131920"
            emissive="#0a2a27"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={1}
            wireframe={true}
          />
        </Icosahedron>

        {/* Inner solid glowing core (TorusKnot) */}
        <TorusKnot args={[0.9, 0.25, 128, 32]} scale={1}>
           <meshStandardMaterial 
            color="#0d1117"
            emissive="#1d4ed8"
            emissiveIntensity={0.6}
            roughness={0.2} 
            metalness={0.9}
            wireframe={false}
          />
        </TorusKnot>
        
        {/* Inner glow point light */}
        <pointLight intensity={3} color="#2ee6c5" distance={5} />
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        
        {/* Cinematic lighting setup */}
        <directionalLight position={[5, 5, 5]} intensity={2.5} color="#2ee6c5" />
        <pointLight position={[-5, -5, -5]} intensity={6} color="#3b82f6" distance={25} />
        
        <ComplexCore />
        
        {/* Dynamic environmental particles */}
        <Sparkles 
          count={250} 
          scale={14} 
          size={3.5} 
          speed={0.4} 
          opacity={0.5} 
          color="#2ee6c5" 
        />
        <Sparkles 
          count={150} 
          scale={16} 
          size={6} 
          speed={0.2} 
          opacity={0.3} 
          color="#3b82f6" 
        />
        
        {/* Deep starfield background */}
        <Stars radius={10} depth={50} count={3500} factor={4} saturation={1} fade speed={1.5} />
      </Canvas>
    </div>
  );
}
