import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CastleInsideModel(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/castleinside.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials['Shape.081']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials['Shape.083']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_2.geometry}
          material={materials['Shape.084']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_3.geometry}
          material={materials['Shape.081_3C96C6A_c.bmp']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_4.geometry}
          material={materials['Shape.164']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_5.geometry}
          material={materials['Shape.165']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_6.geometry}
          material={materials['Shape.181']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_7.geometry}
          material={materials['Shape.091']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_8.geometry}
          material={materials['Shape.097']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_9.geometry}
          material={materials['Shape.098']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/castleinside.glb')

