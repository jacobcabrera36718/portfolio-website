'use client';

import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import noiseFragment from './shader/noiseFragment';

const NoiseMaterial = shaderMaterial(
  { iTime: 0, iResolution: new THREE.Vector3() },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  noiseFragment
);
extend({ NoiseMaterial });

function FullscreenPlane() {
  const ref = useRef();
  const { size, viewport } = useThree();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.iTime = clock.getElapsedTime();
      ref.current.iResolution.set(size.width, size.height, 1);
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <noiseMaterial ref={ref} />
    </mesh>
  );
}

export default function ShaderBackground() {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <color attach="background" args={['black']} />
      <FullscreenPlane />
    </Canvas>
  );
}
