#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
  // start off with black
  vec3 color = vec3(0.);
  // normalise coords to be from 0 - 1
  vec2 st = gl_FragCoord.xy/u_resolution;
  // if pixel is beyond halfway point, assign 1 value to color (which is white)
  // otherwise, back to 0 which is black
  color += step(.5,st.x);
  // set the color and move on
  gl_FragColor = vec4(color,1.);
}
