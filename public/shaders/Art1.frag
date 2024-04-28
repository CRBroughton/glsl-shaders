#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

vec4 red(float red, float green){
    return vec4(red,green,0.0,1.0);
}

// fragCoord - input
// fragColor - output
void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution * 2.0 - 1.0;

	gl_FragColor = red(uv.x, uv.y);
}

