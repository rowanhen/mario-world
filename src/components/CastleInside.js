import React, { useState, useRef } from "react";
import { useFrame } from '@react-three/fiber'
import CastleInsideModel from "./assets/CastleInsideModel"
import { MagicMirror } from "./assets/MagicMirror"
import { RotatingBox } from "./assets/RotatingBox"
import { DistortDoorMaterial } from '../shaders/distortdoor'
import { SkillsRotatingBox } from "./assets/SkillsRotatingBox"

function ShaderPlane({setLocation, ...props}) {
    console.log(setLocation)
    const ref = useRef()
    useFrame((state, delta) => (ref.current.time += delta))
    return (
        <mesh {...props}  onClick={() => setLocation("/")}>
          <planeGeometry args={[1, 1, 16, 16]} />
          <distortDoorMaterial key={DistortDoorMaterial.key} colorStart="blue" colorEnd="white" ref={ref} />
        </mesh>
    )
}


export const CastleInside = ({setLocation}) => {
    const [skillBoxAsset, setSkillBoxAsset] = useState(false);
    const [boxAsset, setBoxAsset] = useState(false);
    const [frameAsset, setFrameAsset] = useState(false);
    return (
        <>
            <ShaderPlane position={[0,-1.9,24]} scale={[7, 5, 5]} rotation-y={[-Math.PI / 1]} setLocation={setLocation} />
            <MagicMirror states={{boxAsset, skillBoxAsset, frameAsset}} setStates={{setBoxAsset, setSkillBoxAsset, setFrameAsset}} />
            <RotatingBox states={{boxAsset, skillBoxAsset, frameAsset}} setStates={{setBoxAsset, setSkillBoxAsset, setFrameAsset}} position={[10, 0, -10]} midPoint={[5,0,0]} />
            <SkillsRotatingBox states={{boxAsset, skillBoxAsset, frameAsset}} setStates={{setBoxAsset, setSkillBoxAsset, setFrameAsset}} position={[-10, 0, -10]} midPoint={[-5,0,0]} />
            <CastleInsideModel scale={[20,20,20]} position={[0,3,-14]} rotation-y={[-Math.PI / 2]} />
        </>
    )
}