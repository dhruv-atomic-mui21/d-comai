import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FloatingCard({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }

    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2.5, 0.1]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.8}
          roughness={0.2}
          emissive="#ef4444"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[1.8, 2.3, 0.05]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, 0.8, 0.1]}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}
