import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, CameraShake, Environment, Sky } from '@react-three/drei'
import { EffectComposer, Noise, HueSaturation, Pixelation } from '@react-three/postprocessing'
import { CastleOutside } from './components/CastleOutside'
import { CastleInside } from './components/CastleInside'
import { useLocation, Switch, Route } from "wouter"
import { a } from "@react-spring/three"
import { useTransition } from "@react-spring/core"



RectAreaLightUniformsLib.init()


const PostEffects = (props) => {
  return (
    <EffectComposer>
      <Noise opacity={0.19} />
      <HueSaturation
        hue={0} // hue in radians
        saturation={0.3} // saturation in radians
      />
      <Pixelation
        granularity={0} // pixel granularity
      />
    </EffectComposer>
  )
}

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[50, 50, -30]} castShadow />
      <Environment preset="warehouse" />
      <Sky
        distance={450000} // Camera distance (default=450000)
        sunPosition={[5, 5, 5]} // Sun position normal (defaults to inclination and azimuth if not set)
        inclination={0} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
      />
    </>
  )
}

const Scene = ({transition, setLocation}) => {
  return transition(({...props }, location) => (
    <a.group {...props}>
      <Switch location={location}>
        <Route path="/">
          <CastleOutside setLocation={setLocation} />
        </Route>
        <Route path="/inside">
          <CastleInside setLocation={setLocation} />
        </Route>
      </Switch>
    </a.group>
  ))
}


export default function App() {
  const ref = useRef()
  const [location, setLocation] = useLocation()

  const mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  }


  // Animated shape props
  const transition = useTransition(location, {
    from: { position: [-100, 40, -230], rotation: [1, Math.PI, 0], scale: [0, 0, 0] },
    enter: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    leave: { position: [100, 0, -100], rotation: [1, -Math.PI, 0], scale: [0, 0, 0] },
    config: { duration: 5050 },
  })

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{fov: 60}} >
        <PostEffects />
        <Suspense fallback={null}>
          <Scene transition={transition} setLocation={setLocation} />
          <Lighting />
          <CameraShake maxYaw={0.02} maxPitch={0.02} maxRoll={0.02} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
        </Suspense>
        <OrbitControls ref={ref} makeDefault enablePan={true} enableDamping={true} panSpeed = {4.0} screenSpacePanning = {false} dampingFactor={0.05} enableZoom={false} target={[0,0,0.01]} keyPanSpeed = {1.0} mouseButtons={mouseButtons} />
      </Canvas>
      {/* {console.log(ref.current.object.setViewOffset)} */}
    </>
  )
}


