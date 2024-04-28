#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec4 fragCoordsExample(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    return vec4(st.x,st.y,0.0,1.0);
}

void main() {
	gl_FragColor = fragCoordsExample();
}

