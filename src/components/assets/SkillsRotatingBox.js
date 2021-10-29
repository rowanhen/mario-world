import React from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export function SkillsRotatingBox({...props}) {
  const myMesh = React.useRef();

  const positioningVariable = props.position
  const skillBoxActive = props.states.skillBoxAsset

  const midPoint = props.midPoint

  const { scale } = useSpring({
    scale: skillBoxActive ? 1 : 1.5,
    to: async next => {
        await next({scale: skillBoxActive ? 1 : 1});
        await next({scale: skillBoxActive ? 1 : 1});
        await next({scale: skillBoxActive ? 2.0 : 1});
      },
    from: { scale: skillBoxActive ? 1 : 1 },
    config: { duration: 1000 },
  });

  const { position } = useSpring({
    to: async next => {
        await next({ position: skillBoxActive ? positioningVariable : positioningVariable });
        await next({ position: skillBoxActive ? midPoint : positioningVariable });
        await next({ position: skillBoxActive ? [0, 0, 0] : positioningVariable });
      },
    from: { position: skillBoxActive ? positioningVariable : positioningVariable },
    config: { duration: 1000 },
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });

  return (
    <animated.mesh
      position={position}
      scale={scale}
      onClick={() => {
        props.setStates.setSkillBoxAsset(!skillBoxActive)
        props.setStates.setBoxAsset(false)
        props.setStates.setFrameAsset(false)
      }}
      ref={myMesh}
    >
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  );
}