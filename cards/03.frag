#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
  // start off with black
  vec3 color = vec3(0.);
  // normalise coords to be from 0 - 1
  vec2 st = gl_FragCoord.xy/u_resolution;
  // step horizontally and vertically at the same time to produce diagonal
  color += step(.5,(st.x+st.y)*.5);
  // set the color and move on
  gl_FragColor = vec4(color,1.);
}
