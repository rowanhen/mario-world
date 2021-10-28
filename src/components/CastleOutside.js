import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import CastleOutsideModel from './assets/CastleOutsideModel'
import { DistortDoorMaterial } from '../shaders/distortdoor'
import { WaveyMaterial } from '../shaders/waveymaterial'
import { RotatingBox } from './assets/RotatingBox'



function ShaderPlane({...props}) {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.time += delta))
    return (
        <mesh {...props}>
          <planeGeometry args={[1, 1, 16, 16]} />
          <distortDoorMaterial side={THREE.DoubleSide} key={DistortDoorMaterial.key} colorStart="blue" colorEnd="white" ref={ref} />
        </mesh>
    )
}
  
const Wave = ({...props}) => {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.time += delta))
    return (
      <mesh {...props} frustumCulled={false}>
        <planeBufferGeometry args={[1, 1, 128, 128]} />
        <waveyMaterial ref={ref} side={THREE.DoubleSide} key={WaveyMaterial.key} />
      </mesh>
    );
}

export const CastleOutside = () => {
    return (
        <>
          {/* <ShaderPlane position={[0,-5,-32]} scale={[10, 10, 10]} /> */}
          <Wave rotation={[-Math.PI / 2, 0, 0]} position={[0,-15,0]} />
          <CastleOutsideModel scale={[20,20,20]} position={[0,-10,0]} rotation-y={[-Math.PI / 1]} />
        </>
    )
}