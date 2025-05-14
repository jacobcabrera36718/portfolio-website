const noiseFragment = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

  for(float i = 1.0; i < 10.0; i++){
    uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime * 0.01); // speed at end 
    uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime * 0.01); // speed at end
  }

  vec3 color = vec3(0.05) / pow(abs(sin(iTime - uv.y - uv.x)), 0.2); // pow for bright to darker and vec3 num to darker
  gl_FragColor = vec4(color, 1.0);
}
`;

export default noiseFragment;
