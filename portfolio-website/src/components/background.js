'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function background() {
  const containerRef = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(width, height) }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;

        void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;

          float wave = sin((uv.x + u_time * 0.5) * 20.0) * 0.05;
          float y = uv.y + wave;

          float pixelSize = 0.015;
          vec2 pixel = floor(uv / pixelSize) * pixelSize;

          float brightness = step(0.5, mod((pixel.y + wave) * 40.0, 1.0));
          gl_FragColor = vec4(vec3(brightness), 1.0);
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate() {
      uniforms.u_time.value += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    />
  );
}
