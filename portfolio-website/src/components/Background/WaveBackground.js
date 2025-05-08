'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { vertex, fragment } from './Shader';

const WaveMaterial = shaderMaterial(
  {
    uTime: 0,
    uAmplitude: 0.15,
    uWaveLength: 4.0
  },
  vertex,
  fragment
);

extend({ WaveMaterial });

function WaveMesh() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh scale={[10, 10, 1]}>
      <planeGeometry args={[1, 1, 128, 128]} />
      <waveMaterial ref={ref} transparent />
    </mesh>
  );
}

export default function WaveBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <ambientLight intensity={1.0} />
        <WaveMesh />
      </Canvas>
    </div>
  );
}
