#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float stroke(float x, float s, float w) {
  float d = step(s,x+w*.5) - step(s,x-w*.5);
  return clamp(d, 0., 1.);
}

void main() {
  // start off with black
  vec3 color = vec3(0.);
  // normalise coords to be from 0 - 1
  vec2 st = gl_FragCoord.xy/u_resolution;
  // draw stroke 
  color += stroke(st.x, .5, .15);
  // set the color and move on
  gl_FragColor = vec4(color,1.);
}
