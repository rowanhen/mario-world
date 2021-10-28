import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/castlebeachcove.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_10.geometry}
        material={materials.Shape_141}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_40.geometry}
        material={materials.Shape_194}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.5, 0.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_46_1.geometry}
          material={nodes.Mesh_46_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_46_2.geometry}
          material={nodes.Mesh_46_2.material}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.5, 0.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_47_1.geometry}
          material={nodes.Mesh_47_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_47_2.geometry}
          material={nodes.Mesh_47_2.material}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.5, 0.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_53_1.geometry}
          material={nodes.Mesh_53_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_53_2.geometry}
          material={nodes.Mesh_53_2.material}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.5, 0.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_64_1.geometry}
          material={nodes.Mesh_64_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_64_2.geometry}
          material={nodes.Mesh_64_2.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0.geometry}
        material={materials.Shape_131}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_1.geometry}
        material={materials.Shape_132}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials.Shape_133}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_65.geometry}
        material={materials.Shape_228}
        position={[0, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_3.geometry}
        material={materials.Shape_134}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_38.geometry}
        material={materials.Shape_192}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_4.geometry}
        material={materials.Shape_135}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_5.geometry}
        material={materials.Shape_136}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_66.geometry}
        material={materials.Shape_229}
        position={[0, 0, -0.001]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_15.geometry}
        material={materials.Shape_146}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_6.geometry}
        material={materials.Shape_137}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_29.geometry}
        material={materials.Shape_160}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_32.geometry}
        material={materials.Shape_163}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_33.geometry}
        material={materials.Shape_164}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_7.geometry}
        material={materials.Shape_138}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_22.geometry}
        material={materials.Shape_153}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_23.geometry}
        material={materials.Shape_154}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_24.geometry}
        material={materials.Shape_155}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_25.geometry}
        material={materials.Shape_156}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_26.geometry}
        material={materials.Shape_157}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_27.geometry}
        material={materials.Shape_158}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_28.geometry}
        material={materials.Shape_159}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_8.geometry}
        material={materials.Shape_139}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_34.geometry}
        material={materials.Shape_165}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_35.geometry}
        material={materials.Shape_166}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_36.geometry}
        material={materials.Shape_167}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_37.geometry}
        material={materials.Shape_168}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_39.geometry}
        material={materials.Shape_193}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_9.geometry}
        material={materials.Shape_140}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_11.geometry}
        material={materials.Shape_142}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_30.geometry}
        material={materials.Shape_161}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_12.geometry}
        material={materials.Shape_143}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_31.geometry}
        material={materials.Shape_162}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_13.geometry}
        material={materials.Shape_144}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_14.geometry}
        material={materials.Shape_145}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_16.geometry}
        material={materials.Shape_147}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_17.geometry}
        material={materials.Shape_148}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_18.geometry}
        material={materials.Shape_149}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_19.geometry}
        material={materials.Shape_150}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_20.geometry}
        material={materials.Shape_151}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_21.geometry}
        material={materials.Shape_152}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_67.geometry}
        material={materials.Shape_230}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_68.geometry}
        material={materials.Shape_231}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_69.geometry}
        material={materials.Shape_232}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_70.geometry}
        material={materials.Shape_233}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_71.geometry}
        material={materials.Shape_249}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_74.geometry}
        material={materials.Shape_258}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_75.geometry}
        material={materials.Shape_259}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      /> */}
    </group>
  )
}

useGLTF.preload('/castlebeachcove.glb')