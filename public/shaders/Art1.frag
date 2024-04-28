#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

// fragCoord - input
// fragColor - output
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution * 2.0 - 1.0;
    // avoids stretching
    uv.x *= u_resolution.x / u_resolution.y;

    float d = length(uv);
    d = sin(d*8. + u_time)/8.;
    d = abs(d);
    // d = smoothstep(0.0, 0.1, d);

    d = 0.02 / d;

	gl_FragColor = vec4(d, d, d, 1.0);
}

