#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

// fragCoord - input
// fragColor - output

// Color palette
vec3 a = vec3(0.5, 0.5, 0.5);
vec3 b = vec3(0.5, 0.5, 0.5);
vec3 c = vec3(1.0, 1.0, 1.0);
vec3 e = vec3(0.263,0.416,0.557);

// cosine based palette, 4 vec3 params
vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d ){
    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution * 2.0 - 1.0;
    // avoids stretching
    uv.x *= u_resolution.x / u_resolution.y;

    float d = length(uv);

    vec3 colour = palette(d + u_time, a, b, c, e);

    d = sin(d*8. + u_time)/8.;
    d = abs(d);
    // d = smoothstep(0.0, 0.1, d);

    d = 0.02 / d;

    colour *= d;

	gl_FragColor = vec4(colour, 1.0);
}

