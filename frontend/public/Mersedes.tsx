/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mersedes.gltf 
Author: Black Snow (https://sketchfab.com/BlackSnow02)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mersedes-benz-s-class-w221-6b1c0ad55406406a8cf8177dc0a4f2b9
Title: Mersedes-Benz S-class W221
*/
// import React from 'react';
import { useGLTF } from '@react-three/drei';

type ModelProps = {
  [key: string]: any;
};

export default function Model(props: ModelProps): JSX.Element {
  const { nodes, materials } = useGLTF('/mersedes.gltf') as any;

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[5.382, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_0.geometry} material={materials.sw221} />
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_b_0.geometry} material={materials.sw221_b} />
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_lights_lod0_0.geometry} material={materials.sw221_lights_lod0} />
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_lights_lod0_2_0.geometry} material={materials.sw221_lights_lod0_2} />
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_runninglight_fl_0.geometry} material={materials.sw221_runninglight_fl} />
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_glass_0.geometry} material={materials.sw221_glass} />
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_lowbeam_fl_0.geometry} material={materials.sw221_lowbeam_fl} />
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_interior_hl_0.geometry} material={materials.sw221_interior_hl} />
          <mesh geometry={nodes.sw221_headlight_L_fl_sw221_signal_L_fl_0.geometry} material={materials.sw221_signal_L_fl} />
        </group>
        <group position={[5.105, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_taillightglass_R_fl_sw221_glass_0.geometry} material={materials.sw221_glass} />
          <mesh geometry={nodes.sw221_taillightglass_R_fl_sw221_redglass_0.geometry} material={materials.sw221_redglass} />
        </group>
        <group position={[5.502, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_taillightglass_L_fl_sw221_glass_0.geometry} material={materials.sw221_glass} />
          <mesh geometry={nodes.sw221_taillightglass_L_fl_sw221_redglass_0.geometry} material={materials.sw221_redglass} />
        </group>
        <group position={[5.268, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_taillight_R_fl_sw221_0.geometry} material={materials.sw221} />
          <mesh geometry={nodes.sw221_taillight_R_fl_sw221_lights_lod0_0.geometry} material={materials.sw221_lights_lod0} />
          <mesh geometry={nodes.sw221_taillight_R_fl_sw221_runninglight_fl_0.geometry} material={materials.sw221_runninglight_fl} />
          <mesh geometry={nodes.sw221_taillight_R_fl_sw221_reverselight_fl_0.geometry} material={materials.sw221_reverselight_fl} />
          <mesh geometry={nodes.sw221_taillight_R_fl_sw221_lights_lod0_trans_0.geometry} material={materials.sw221_lights_lod0_trans} />
        </group>
        <group position={[5.268, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_taillight_L_fl_sw221_0.geometry} material={materials.sw221} />
          <mesh geometry={nodes.sw221_taillight_L_fl_sw221_lights_lod0_0.geometry} material={materials.sw221_lights_lod0} />
          <mesh geometry={nodes.sw221_taillight_L_fl_sw221_runninglight_fl_0.geometry} material={materials.sw221_runninglight_fl} />
          <mesh geometry={nodes.sw221_taillight_L_fl_sw221_reverselight_fl_0.geometry} material={materials.sw221_reverselight_fl} />
          <mesh geometry={nodes.sw221_taillight_L_fl_sw221_lights_lod0_trans_0.geometry} material={materials.sw221_lights_lod0_trans} />
          <mesh geometry={nodes.sw221_taillight_L_fl_sw221_signal_LR_fl_0.geometry} material={materials.sw221_signal_LR_fl} />
        </group>
        <group position={[5.42, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_tailgate_sedan_sw221_0.geometry} material={materials.sw221} />
          <mesh geometry={nodes.sw221_tailgate_sedan_sw221_lights_lod0_0.geometry} material={materials.sw221_lights_lod0} />
          <mesh geometry={nodes.sw221_tailgate_sedan_sw221_nodamage_lod0_0.geometry} material={materials.sw221_nodamage_lod0} />
          <mesh geometry={nodes.sw221_tailgate_sedan_sw221_interior_lod0_0.geometry} material={materials.sw221_interior_lod0} />
          <mesh geometry={nodes.sw221_tailgate_sedan_sw221_paint_0.geometry} material={materials.sw221_paint} />
          <mesh geometry={nodes.sw221_tailgate_sedan_sw221_carpet_0.geometry} material={materials.sw221_carpet} />
        </group>
        <group position={[5.42, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_sunvisor_sw221_alcantara_0.geometry} material={materials.sw221_alcantara} />
          <mesh geometry={nodes.sw221_sunvisor_sw221_dvd_b_0.geometry} material={materials.sw221_dvd_b} />
        </group>
        <group position={[42.113, 91.373, 15.929]} rotation={[-2.794, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_steer_sw221_0.geometry} material={materials.sw221} />
          <mesh geometry={nodes.sw221_steer_sw221_badges_0.geometry} material={materials.sw221_badges} />
          <mesh geometry={nodes.sw221_steer_sw221_interior_lod0_0.geometry} material={materials.sw221_interior_lod0} />
          <mesh geometry={nodes.sw221_steer_sw221_interior_emissive_lod0_0.geometry} material={materials.sw221_interior_emissive_lod0} />
          <mesh geometry={nodes.sw221_steer_sw221_interior_d_0.geometry} material={materials.sw221_interior_d} />
          <mesh geometry={nodes.sw221_steer_sw221_wood_0.geometry} material={materials.sw221_wood} />
          <mesh geometry={nodes.sw221_steer_sw221_leather2_0.geometry} material={materials.sw221_leather2} />
          <mesh geometry={nodes.sw221_steer_sw221_stitching1_0.geometry} material={materials.sw221_stitching1} />
        </group>
        <group position={[5.42, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_seats_R_sw221_0.geometry} material={materials.sw221} />
          <mesh geometry={nodes.sw221_seats_R_sw221_interior_lod0_0.geometry} material={materials.sw221_interior_lod0} />
          <mesh geometry={nodes.sw221_seats_R_sw221_belt_0.geometry} material={materials.sw221_belt} />
          <mesh geometry={nodes.sw221_seats_R_sw221_perforated_0.geometry} material={materials.sw221_perforated} />
          <mesh geometry={nodes.sw221_seats_R_sw221_stitching1_0.geometry} material={materials.sw221_stitching1} />
          <mesh geometry={nodes.sw221_seats_R_sw221_alcantara1_b_0.geometry} material={materials.sw221_alcantara1_b} />
          <mesh geometry={nodes.sw221_seats_R_sw221_leather1_0.geometry} material={materials.sw221_leather1} />
        </group>
        <group position={[-85.932, 97.767, 41.299]} rotation={[-Math.PI / 2, 0, 0.698]} scale={100}>
          <mesh geometry={nodes.sw221_mirror_R_fl_sw221_0.geometry} material={materials.sw221} />
          <mesh geometry={nodes.sw221_mirror_R_fl_sw221_b_0.geometry} material={materials.sw221_b} />
          <mesh geometry={nodes.sw221_mirror_R_fl_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.sw221_mirror_R_fl_sw221_paint_0.geometry} material={materials.sw221_paint} />
          <mesh geometry={nodes.sw221_mirror_R_fl_sw221_metal_0.geometry} material={materials.sw221_metal} />
          <mesh geometry={nodes.sw221_mirror_R_fl_sw221_signal_R_mirror_fl_0.geometry} material={materials.sw221_signal_R_mirror_fl} />
        </group>
        <group position={[96.773, 97.887, 41.299]} rotation={[-Math.PI / 2, 0, -0.698]} scale={100}>
          <mesh geometry={nodes.sw221_mirror_L_fl_sw221_0.geometry} material={materials.sw221} />
          <mesh geometry={nodes.sw221_mirror_L_fl_sw221_b_0.geometry} material={materials.sw221_b} />
          <mesh geometry={nodes.sw221_mirror_L_fl_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.sw221_mirror_L_fl_sw221_paint_0.geometry} material={materials.sw221_paint} />
          <mesh geometry={nodes.sw221_mirror_L_fl_sw221_signal_L_mirror_fl_0.geometry} material={materials.sw221_signal_L_mirror_fl} />
          <mesh geometry={nodes.sw221_mirror_L_fl_sw221_metal_0.geometry} material={materials.sw221_metal} />
        </group>
        <group position={[5.42, -3.629, -2.714]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.sw221_intmirror_sw221_interior_lod0_0.geometry} material={materials.sw221_interior_lod0} />
          <mesh geometry={nodes.sw221_intmirror_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.sw221_intmirror_sw221_alcantara_0.geometry} material={materials.sw221_alcantara} />
        </group>

              </group>
    </group>
  )
}

useGLTF.preload('/mersedes.gltf')
