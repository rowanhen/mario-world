import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import guid from 'short-uuid'
import glsl from 'babel-plugin-glsl/macro'
import WaterTexture from '../textures/water-texture.png'

class WaveyMaterial extends THREE.ShaderMaterial {
  constructor() {
    const textureLoader = new THREE.TextureLoader()
    const watertexture = textureLoader.load(WaterTexture)
    super({
      uniforms: {
        time: { value: 0 },
        uFrequency: { value: new THREE.Vector2(100, 5) }, //edit X value to increase/descrease no. of waves
        uColor: { value: new THREE.Color('orange') },
        uTexture: { value: watertexture },
      },
      vertexShader: glsl`
      uniform vec2 uFrequency;
      uniform float time;

      varying vec2 vUv;
      varying float vElevation;

      void main()
      {
          vec4 modelPosition = modelMatrix * vec4(position, 0.006);

          float elevation = sin(modelPosition.x * uFrequency.x - time)*0.002;
          elevation += sin(modelPosition.y * uFrequency.y - time) * 0.001;

          modelPosition.y += elevation;

          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;

          gl_Position = projectedPosition;

          vUv = uv;
          vElevation = elevation;
      }`,
      fragmentShader: glsl`
      uniform vec3 uColor;
      uniform sampler2D uTexture;
      varying vec2 vUv;
      varying float vElevation;

      void main()
      {
          vec2 st = vUv;
          vec3 color = vec3(1.0);
          st *= 60.0;      // Number of tiles
          st = fract(st);
            
          color = vec3(st,0.5);
          vec4 textureColor = texture2D(uTexture, st);
          // gl_FragColor = textureColor;
          // vec4 textureColor = texture2D(uTexture, vUv);
          textureColor.rgb *= vElevation * 1.0 + 1.2;
          // gl_FragColor = vec4(color, 1.0);
          gl_FragColor = textureColor;
          // gl_FragColor = vec4(vUv, 0.0, 1.0);
      }`
    })
  }
  set time(v) { this.uniforms.time.value = v } // prettier-ignore
  get time() { return this.uniforms.time.value } // prettier-ignore
}

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
WaveyMaterial.key = guid.generate()
// Make the material available in JSX as <waveyMaterial />
extend({ WaveyMaterial })

export { WaveyMaterial }