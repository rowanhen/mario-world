import React from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export function RotatingBox({...props}) {
  const myMesh = React.useRef();

  const positioningVariable = props.position
  const boxActive = props.states.boxAsset
  const midPoint = props.midPoint

  const { scale } = useSpring({
    scale: boxActive ? 1 : 1.5,
    to: async next => {
        await next({scale: boxActive ? 1 : 1});
        await next({scale: boxActive ? 1 : 1});
        await next({scale: boxActive ? 2.0 : 1});
      },
    from: { scale: boxActive ? 1 : 1 },
    config: { duration: 1000 },
  });

  const { position } = useSpring({
    to: async next => {
        await next({ position: boxActive ? positioningVariable : positioningVariable });
        await next({ position: boxActive ? midPoint : positioningVariable });
        await next({ position: boxActive ? [0, 0, 0] : positioningVariable });
      },
    from: { position: boxActive ? positioningVariable : positioningVariable },
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
        props.setStates.setBoxAsset(!boxActive)
        props.setStates.setFrameAsset(false)
        props.setStates.setSkillBoxAsset(false)
      }}
      ref={myMesh}
    >
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  );
}