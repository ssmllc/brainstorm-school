"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
			
const RenderThree = () => {
  useEffect(() => {
    let camera, scene, renderer;

    function init() {
      camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 20 );
      camera.position.z = 2.5;

      // scene

      scene = new THREE.Scene();

      const ambientLight = new THREE.AmbientLight( 0xffffff );
      scene.add( ambientLight );

      const pointLight = new THREE.PointLight( 0xffffff, 15 );
      camera.add( pointLight );
      scene.add( camera );

      // model

      const onProgress = function ( xhr ) {

        if ( xhr.lengthComputable ) {

          const percentComplete = xhr.loaded / xhr.total * 100;
          console.log( percentComplete.toFixed( 2 ) + '% downloaded' );

        }

      };

      new MTLLoader()
        .setPath( 'models/obj/male02/' )
        .load( 'male02.mtl', function ( materials ) {

          materials.preload();

          new OBJLoader()
            .setMaterials( materials )
            .setPath( 'models/obj/male02/' )
            .load( 'male02.obj', function ( object ) {

              object.position.y = - 0.95;
              object.scale.setScalar( 0.01 );
              scene.add( object );

            }, onProgress );

        } );

      //

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor( 0xffffff, 0);
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.querySelector("#renderer").append( renderer.domElement );

      //

      const controls = new  OrbitControls( camera, renderer.domElement );
      controls.minDistance = 2;
      controls.maxDistance = 5;

      //

      window.addEventListener( 'resize', onWindowResize );

    }

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

      requestAnimationFrame( animate );
      renderer.render( scene, camera );

    }
    
    init();
    animate();
  }, []);

  return (
    <div id="renderer" style={{width: '100vw', height: '100vh', background: 'transparent'}}></div>
  )
}

export default RenderThree;
