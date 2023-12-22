/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  Text,
  useVideoTexture,
  Html,
} from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export function RoomModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/landscape.glb");
  const meshPosition = [6151.875, 287.038, 0.029];

  const [scrollX, setScrollX] = useState(0);
  const scrollXRef = useRef(scrollX);
  // Position of the text relative to the mesh
  const textPosition = [meshPosition[0], meshPosition[1], meshPosition[2]];

  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      // Adjust these values as needed
      cameraRef.current.position.x +=
        (scrollX - cameraRef.current.position.x) * 0.02;
    }
  });

  const handleWheel = (event, endXPoint) => {
    // Modify the camera's X position based on the wheel delta
    const newScrollX = scrollXRef.current + event.deltaY;
    if (newScrollX >= 0 && newScrollX <= endXPoint*1.15) {
      setScrollX(newScrollX);
      scrollXRef.current = newScrollX;
    }
  };
  useEffect(() => {
    let maxX = -Infinity;

    Object.values(nodes).forEach((node) => {
      if (node.geometry) {
        node.geometry.computeBoundingBox();
        maxX = Math.max(maxX, node.geometry.boundingBox.max.x);
        console.log(node)
      }
    }); 
    const handleWheelMaxX = (event) => {
      console.log(maxX,"final")
      handleWheel(event, maxX);
    };
    window.addEventListener("wheel", handleWheelMaxX);

    return () => window.removeEventListener("wheel", handleWheelMaxX);
  }, []);

  function VideoMesh() {
    const texture = useVideoTexture("video.mp4");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, -1); // Flipping the texture

    // Create a material with the texture
    const material = new THREE.MeshStandardMaterial({
      map: texture,
    });
    return (
      <mesh
        name="screen_showreel"
        castShadow
        receiveShadow
        geometry={nodes.screen_showreel.geometry}
        material={material}
        position={[2865.328, 286.533, -343.839]}
      />
    );
  }
  // function TexturedMesh() {
  //   const workTexture = useLoader(THREE.TextureLoader, "work1.png");
  //   workTexture.wrapS = THREE.RepeatWrapping;
  //   workTexture.wrapT = THREE.RepeatWrapping;
  //   workTexture.repeat.set(1, -1); // Flipping the texture

  //   // Create a material with the texture
  //   const material = new THREE.MeshStandardMaterial({
  //     map: workTexture,
  //   });
  //   return (
  //     <mesh
  //       name="work_prev_01_0"
  //       castShadow
  //       receiveShadow
  //       geometry={nodes.work_prev_01_0.geometry}
  //       material={material}
  //     />
  //   );
  // }
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="desktop_arrow_button_main"
          castShadow
          receiveShadow
          geometry={nodes.desktop_arrow_button_main.geometry}
          material={nodes.desktop_arrow_button_main.material}
          position={[425.709, 148.449, 0.029]}
        />
        <mesh
          name="desktop_descriptor_title_text"
          castShadow
          receiveShadow
          geometry={nodes.desktop_descriptor_title_text.geometry}
          material={nodes.desktop_descriptor_title_text.material}
          position={[213.851, 148.449, 0.029]}
        />
        <mesh
          name="desktop_wow_title_sign"
          castShadow
          receiveShadow
          geometry={nodes.desktop_wow_title_sign.geometry}
          material={nodes.desktop_wow_title_sign.material}
          position={[-498.151, 411.845, 0.029]}
        />
        <mesh
          name="contact_form_fitback"
          castShadow
          receiveShadow
          geometry={nodes.contact_form_fitback.geometry}
          material={nodes.contact_form_fitback.material}
          position={[17355.436, 268.059, 0.029]}
        />
        <PerspectiveCamera
          ref={cameraRef}
          position={[0, 200, 700]}
          fov={60}
          makeDefault
        />
        <mesh
          name="about_text_block"
          castShadow
          receiveShadow
          geometry={nodes.about_text_block.geometry}
          material={nodes.about_text_block.material}
          position={[1715.285, 279.178, 0.029]}
        />
        <mesh
          name="crown_sugn_our_service"
          castShadow
          receiveShadow
          geometry={nodes.crown_sugn_our_service.geometry}
          material={nodes.crown_sugn_our_service.material}
          position={[12035.32, 385.325, 0.029]}
        />
        <mesh
          name="hello_sign_contact"
          castShadow
          receiveShadow
          geometry={nodes.hello_sign_contact.geometry}
          material={nodes.hello_sign_contact.material}
          position={[17046.137, 401.206, 0.029]}
        />
        <mesh
          name="omg_sign"
          castShadow
          receiveShadow
          geometry={nodes.omg_sign.geometry}
          material={nodes.omg_sign.material}
          position={[4320.142, 389.936, 0.029]}
        />
        <mesh
          name="Play_button"
          castShadow
          receiveShadow
          geometry={nodes.Play_button.geometry}
          material={nodes.Play_button.material}
          position={[2864.844, 275.825, -115.224]}
        >
          {/* <Html position={[0, 0, 0]} transform={true}>
            <div className="bg-white w-[5000px] h-[5000px] rounded-[16%] cursor-pointer group overflow-hidden relative border-collapse">
              {" "}
              <div className="bg-red w-full h-full -z-1 absolute transform left-0 top-[100%] rounded-[16%] transition-all duration-2000 ease-in group-hover:top-0 group-hover:opacity-100 opacity-0 " />
              <p className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[1000px] z-1 group-hover:text-white font-bold transition-all duration-500 ease-out">
                Play
              </p>
            </div>
          </Html> */}
        </mesh>
        <mesh
          name="portfolio_text_01"
          castShadow
          receiveShadow
          geometry={nodes.portfolio_text_01.geometry}
          material={nodes.portfolio_text_01.material}
          position={[6151.875, 287.038, 0.029]}
        />
        {/* <Text
          color="black"
          anchorX="center"
          anchorY="middle"
          position={textPosition}
          font={"/Inter-Bold.woff"}
          fontSize={14.5}
        >
          Your Text Here
        </Text> */}
        <mesh
          name="portfolio_text_02"
          castShadow
          receiveShadow
          geometry={nodes.portfolio_text_02.geometry}
          material={nodes.portfolio_text_02.material}
          position={[7004.646, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_03"
          castShadow
          receiveShadow
          geometry={nodes.portfolio_text_03.geometry}
          material={nodes.portfolio_text_03.material}
          position={[7858.798, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_04"
          castShadow
          receiveShadow
          geometry={nodes.portfolio_text_04.geometry}
          material={nodes.portfolio_text_04.material}
          position={[8730.079, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_05"
          castShadow
          receiveShadow
          geometry={nodes.portfolio_text_05.geometry}
          material={nodes.portfolio_text_05.material}
          position={[9580.784, 287.038, 0.029]}
        />
        <mesh
          name="portfolio_text_06"
          castShadow
          receiveShadow
          geometry={nodes.portfolio_text_06.geometry}
          material={nodes.portfolio_text_06.material}
          position={[10447.699, 287.038, 0.029]}
        />
        <VideoMesh />
        <mesh
          name="services_text_block"
          castShadow
          receiveShadow
          geometry={nodes.services_text_block.geometry}
          material={nodes.services_text_block.material}
          position={[14004.598, 252.46, 0.029]}
        />
        <group name="works_prev" position={[5730.657, 286.533, 2.865]}>
          {/* <TexturedMesh /> */}
          <mesh
            name="work_prev_02_1"
            castShadow
            receiveShadow
            geometry={nodes.work_prev_02_1.geometry}
            material={materials["material-12"]}
            position={[859.599, 0, 0]}
          />
          <mesh
            name="work_prev_03_2"
            castShadow
            receiveShadow
            geometry={nodes.work_prev_03_2.geometry}
            material={materials["material-11"]}
            position={[1719.197, 0, 0]}
          />
          <mesh
            name="work_prev_04_3"
            castShadow
            receiveShadow
            geometry={nodes.work_prev_04_3.geometry}
            material={materials["material-10"]}
            position={[2578.795, 0, 0]}
          />
          <mesh
            name="work_prev_05_4"
            castShadow
            receiveShadow
            geometry={nodes.work_prev_05_4.geometry}
            material={materials["material-09"]}
            position={[3438.394, 0, 0]}
          />
          <mesh
            name="work_prev_06_5"
            castShadow
            receiveShadow
            geometry={nodes.work_prev_06_5.geometry}
            material={materials["material-08"]}
            position={[4297.993, 0, 0]}
          />
        </group>
        <mesh
          name="Tex_01"
          castShadow
          receiveShadow
          geometry={nodes.Tex_01.geometry}
          material={materials.Tex_01}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_01001"
          castShadow
          receiveShadow
          geometry={nodes.Tex_01001.geometry}
          material={materials.Tex_01}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="FloorMirror"
          castShadow
          receiveShadow
          geometry={nodes.FloorMirror.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0.821, 0]}
        />
        <mesh
          name="Tex_02_001"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_001.geometry}
          material={materials.Tex_02}
          position={[16245.512, 64.865, -444.386]}
        />
        <mesh
          name="Tex_02_003"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_003.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_004"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_004.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_005"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_005.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_006"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_006.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_007"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_007.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_008"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_008.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_009"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_009.geometry}
          material={materials.Tex_02}
          position={[11318.145, 120.258, -286.535]}
        />
        <mesh
          name="Tex_02_010"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_010.geometry}
          material={materials.Tex_02}
          position={[16045.978, 0, -85.961]}
        />
        <mesh
          name="Tex_02_011"
          castShadow
          receiveShadow={true}
          geometry={nodes.Tex_02_011.geometry}
          material={materials.Tex_02}
          position={[3133.68, 0, 0]}
        />
        <mesh
          name="Tex_02_012"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_012.geometry}
          material={materials.Tex_02}
          position={[11605.813, 126, -479.078]}
        />
        <mesh
          name="Tex_02_013"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_013.geometry}
          material={materials.Tex_02}
          position={[1081.763, 0.233, -483.224]}
        />
        <mesh
          name="Tex_02_014"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_014.geometry}
          material={materials.Tex_02}
          position={[16045.978, 0, -85.961]}
        />
        <mesh
          name="Tex_02_015"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_015.geometry}
          material={materials.Tex_02}
          position={[11636.431, 0.8, -348.8]}
        />
        <mesh
          name="Tex_02_016"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_016.geometry}
          material={materials.Tex_02}
          position={[11636.431, 0.8, -348.8]}
        />
        <mesh
          name="Tex_02_017"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_017.geometry}
          material={materials.Tex_02}
          position={[11664.611, 62.413, -470.158]}
        />
        <mesh
          name="Tex_02_018"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_018.geometry}
          material={materials.Tex_02}
          position={[4642.812, 57.755, -441.286]}
        />
        <mesh
          name="Tex_02_019"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_019.geometry}
          material={materials.Tex_02}
          position={[1082.439, 21.396, -479.564]}
        />
        <mesh
          name="Logo_Rotation"
          castShadow
          receiveShadow
          geometry={nodes.Logo_Rotation.geometry}
          material={materials.Tex_02}
          position={[860.188, 271.966, -82.812]}
        />
        <mesh
          name="Planet_Rotation"
          castShadow
          receiveShadow
          geometry={nodes.Planet_Rotation.geometry}
          material={materials.Tex_02}
          position={[16045.839, 286.533, -85.96]}
        />
        <mesh
          name="Tex_02_002001"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_002001.geometry}
          material={materials.Tex_02}
          position={[2402.937, 33.262, -189.113]}
        />
        <mesh
          name="Tex_02_017001"
          castShadow
          receiveShadow
          geometry={nodes.Tex_02_017001.geometry}
          material={materials.Tex_02}
          position={[11664.611, 62.413, -470.158]}
        />
        <mesh
          name="Tex_03"
          castShadow
          receiveShadow
          geometry={nodes.Tex_03.geometry}
          material={materials.Tex_03}
          scale={821.018}
        />
        <mesh
          name="Text_Var_01"
          castShadow
          receiveShadow
          geometry={nodes.Text_Var_01.geometry}
          material={materials.Tex_03}
          scale={821.018}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/landscape.glb");
