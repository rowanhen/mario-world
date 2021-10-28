import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { createPortal, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Plane, TorusKnot  } from '@react-three/drei'
import { useSpring, animated, config } from "@react-spring/three";


function SpinningThing() {
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01))
    return (
      <group>
        <TorusKnot ref={mesh} args={[1, 0.4, 100, 64]}>
          <meshNormalMaterial attach="material" />
        </TorusKnot>
      </group>
    )
  }

function Cube({...props}) {
  const myMesh = React.useRef();

  const frameActive = props.states.frameAsset

  const { rotation } = useSpring({
    rotation: frameActive ? [-Math.PI / 1, 0, 0] : [-Math.PI / 1, -0.8, 0],
    config: { duration: 1000 },
  });

  const { scale } = useSpring({
    scale: frameActive ? 1 : 2,
    config: config.slow,
  })

  const x = 21;
  const y = 3;
  const z = 7;

  const { position } = useSpring({
    to: async next => {
        await next({ position: frameActive ? [x, y, z] : [x, y, z] });
        await next({ position: frameActive ? [7, y, 0] : [x, y, z] });
        await next({ position: frameActive ? [0, 0, 0] : [x, y, z] });
      },
    from: { position: frameActive ? [x, y, z] : [x, y, z] },
    config: { duration: 1000 },
  });

  const cam = useRef()
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('black')
    const target = new THREE.WebGLMultisampleRenderTarget(1024, 1024, {
      format: THREE.RGBFormat,
      stencilBuffer: false
    })
    target.samples = 2
    return [scene, target]
  }, [])

  useFrame((state) => {
    cam.current.position.z = 5 + Math.sin(state.clock.getElapsedTime() * 1.5) * 2
    state.gl.setRenderTarget(target)
    state.gl.render(scene, cam.current)
    state.gl.setRenderTarget(null)
  })

  return (
    <>
      <PerspectiveCamera ref={cam} position={[0, 0, 10]} dpr={[1, 2]} fov={[60]} />
      {createPortal(<SpinningThing />, scene)}
      <animated.mesh
        position={position}
        rotation={rotation}
        scale={scale}
        onClick={() =>{ 
          props.setStates.setFrameAsset(!frameActive)
          props.setStates.setBoxAsset(false)
        }}
        ref={myMesh}
      >
        <Plane args={[4, 2, 32, 32]} doubleSide={true} {...props}>
          <meshStandardMaterial side={THREE.DoubleSide} attach="material" map={target.texture} />
        </Plane>
      </animated.mesh>
    </>
  )
}

export const MagicMirror = ({...props}) => {
  return (
    <Cube {...props} />
  )
}