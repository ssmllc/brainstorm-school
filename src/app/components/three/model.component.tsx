"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import styled from "styled-components";

import { ConvexGeometry } from "three/addons/geometries/ConvexGeometry.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

const ThreeDModel = styled.div`
  background: transparent;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

const RenderThreeDModel = () => {
  useEffect(() => {
    let camera: any, scene: any, renderer: any;

    function init() {
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        20
      );
      camera.position.z = 2.5;

      // scene
      scene = new THREE.Scene();

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 15);
      camera.add(pointLight);
      scene.add(camera);

      // model
      const onProgress = (xhr: any) => {
        if (xhr.lengthComputable) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          console.log(percentComplete.toFixed(2) + "% downloaded");
        }
      };

      new MTLLoader()
        .setPath("models/obj/male02/")
        .load("male02.mtl", (materials) => {
          materials.preload();

          new OBJLoader()
            .setMaterials(materials)
            .setPath("models/obj/male02/")
            .load(
              "male02.obj",
              (object) => {
                object.position.y = -0.95;
                object.scale.setScalar(0.01);
                scene.add(object);
              },
              onProgress
            );
        });

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0xffffff, 0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.querySelector("#renderer")?.append(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 2;
      controls.maxDistance = 5;
      controls.enableZoom = false;
      // controls.minPolarAngle = Math.PI / 2;
      // controls.maxPolarAngle = Math.PI / 2;

      window.addEventListener("resize", onWindowResize);
    }

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    init();
    animate();
  }, []);

  // useEffect(() => {
  //   let group: any, camera: any, scene: any, renderer: any;

  //   function init() {
  //     scene = new THREE.Scene();

  //     renderer = new THREE.WebGLRenderer({ antialias: true });
  //     renderer.setClearColor(0xffffff, 0);
  //     renderer.setPixelRatio(window.devicePixelRatio);
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     document.querySelector("#renderer")?.append(renderer.domElement);

  //     // camera

  //     camera = new THREE.PerspectiveCamera(
  //       40,
  //       window.innerWidth / window.innerHeight,
  //       1,
  //       1000
  //     );
  //     camera.position.set(15, 20, 30);
  //     scene.add(camera);

  //     // controls

  //     const controls = new OrbitControls(camera, renderer.domElement);
  //     controls.minDistance = 20;
  //     controls.maxDistance = 50;
  //     controls.enableZoom = false;
  //     controls.minPolarAngle = Math.PI / 2;
  //     controls.maxPolarAngle = Math.PI / 2;

  //     // ambient light

  //     scene.add(new THREE.AmbientLight(0x666666));

  //     // point light

  //     const light = new THREE.PointLight(0xffffff, 3, 0, 0);
  //     camera.add(light);

  //     // textures

  //     const loader = new THREE.TextureLoader();
  //     const texture = loader.load("textures/sprites/disc.png");
  //     texture.colorSpace = THREE.SRGBColorSpace;

  //     group = new THREE.Group();
  //     scene.add(group);

  //     // points

  //     let dodecahedronGeometry: any = new THREE.DodecahedronGeometry(9);

  //     // if normal and uv attributes are not removed, mergeVertices() can't consolidate indentical vertices with different normal/uv data

  //     dodecahedronGeometry.deleteAttribute("normal");
  //     dodecahedronGeometry.deleteAttribute("uv");

  //     dodecahedronGeometry =
  //       BufferGeometryUtils.mergeVertices(dodecahedronGeometry);

  //     const vertices = [];
  //     const positionAttribute = dodecahedronGeometry.getAttribute("position");

  //     for (let i = 0; i < positionAttribute.count; i++) {
  //       const vertex = new THREE.Vector3();
  //       vertex.fromBufferAttribute(positionAttribute, i);
  //       vertices.push(vertex);
  //     }

  //     const pointsMaterial = new THREE.PointsMaterial({
  //       color: 0x0080ff,
  //       map: texture,
  //       size: 1,
  //       alphaTest: 0.5,
  //     });

  //     const pointsGeometry = new THREE.BufferGeometry().setFromPoints(vertices);

  //     const points = new THREE.Points(pointsGeometry, pointsMaterial);
  //     group.add(points);

  //     // convex hull

  //     const meshMaterial = new THREE.MeshLambertMaterial({
  //       color: 0xffffff,
  //       opacity: 0.5,
  //       side: THREE.DoubleSide,
  //       transparent: true,
  //     });

  //     const meshGeometry = new ConvexGeometry(vertices);

  //     const mesh = new THREE.Mesh(meshGeometry, meshMaterial);
  //     group.add(mesh);

  //     //

  //     window.addEventListener("resize", onWindowResize);
  //   }

  //   function onWindowResize() {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();

  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   }

  //   function animate() {
  //     requestAnimationFrame(animate);

  //     group.rotation.y += 0.005;

  //     render();
  //   }

  //   function render() {
  //     renderer.render(scene, camera);
  //   }

  //   init();
  //   animate();
  // }, []);

  return <ThreeDModel id="renderer"></ThreeDModel>;
};

export default RenderThreeDModel;
