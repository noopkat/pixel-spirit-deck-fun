#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
#define PI 3.14159265358979  

void main() {
  // start off with black
  vec3 color = vec3(0.);
  // normalise coords to be from 0 - 1
  vec2 st = gl_FragCoord.xy/u_resolution;
  // use cos and PI to draw a wave pattern
  color += step(.5+cos(st.y*PI)*.25,st.x);
  // set the color and move on
  gl_FragColor = vec4(color,1.);
}
