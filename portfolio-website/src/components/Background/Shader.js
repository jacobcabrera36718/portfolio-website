export const vertex = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uWaveLength;

  void main() {
    vUv = uv;
    vec3 newPosition = position;
    float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
    newPosition.z += wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

export const fragment = `
  varying vec2 vUv;

  void main() {
    float lineSpacing = 0.04;
    float thickness = 0.008;

    // Animate vertical wave bands
    float band = sin(vUv.y * 60.0 + vUv.x * 4.0 + uTime * 1.5);

    // Create repeating thin bands
    float lines = smoothstep(thickness, 0.0, abs(mod(band, lineSpacing) - lineSpacing / 2.0));

    // Style: black background, bright grey lines
    vec3 background = vec3(0.0);
    vec3 stripe = vec3(0.6);
    vec3 color = mix(background, stripe, lines);

    gl_FragColor = vec4(color, 1.0);
  }
`;
