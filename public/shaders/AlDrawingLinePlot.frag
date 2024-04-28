#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st) {
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    float y = st.x;

    vec3 colour = vec3(y);

    // Plot a line
    float pct = plot(st);
    colour = (1.0 - pct) * colour + pct * vec3(0.0, 1.0, 0.0);

    gl_FragColor = vec4(colour, 1.0);
}

