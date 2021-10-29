import React, { useState } from "react";
import CastleInsideModel from "./assets/CastleInsideModel"
import { MagicMirror } from "./assets/MagicMirror"
import { RotatingBox } from "./assets/RotatingBox"
import { SkillsRotatingBox } from "./assets/SkillsRotatingBox"


export const CastleInside = () => {
    const [skillBoxAsset, setSkillBoxAsset] = useState(false);
    const [boxAsset, setBoxAsset] = useState(false);
    const [frameAsset, setFrameAsset] = useState(false);
    return (
        <>
            <MagicMirror states={{boxAsset, skillBoxAsset, frameAsset}} setStates={{setBoxAsset, setSkillBoxAsset, setFrameAsset}} />
            <RotatingBox states={{boxAsset, skillBoxAsset, frameAsset}} setStates={{setBoxAsset, setSkillBoxAsset, setFrameAsset}} position={[10, 0, -10]} midPoint={[5,0,0]} />
            <SkillsRotatingBox states={{boxAsset, skillBoxAsset, frameAsset}} setStates={{setBoxAsset, setSkillBoxAsset, setFrameAsset}} position={[-10, 0, -10]} midPoint={[-5,0,0]} />
            <CastleInsideModel scale={[20,20,20]} position={[0,3,-14]} rotation-y={[-Math.PI / 2]} />
        </>
    )
}