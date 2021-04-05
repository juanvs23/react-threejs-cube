import React from 'react'
import * as THREE from 'three';

const Scene=()=>{
    const [bgColor,setbgColor]=React.useState(0x2a3b4c)
    const [color,setColor]=React.useState(0x00ff00)
    const [zoom,setZoom]=React.useState(30)
    let scene,camera, renderer, geometry, material, cube
  //creating scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(bgColor);
  
  //add camera
  camera = new THREE.PerspectiveCamera(
    zoom,
      window.innerWidth/window.innerHeight
  );
  
  //renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  React.useEffect(() => {
    
    document.body.appendChild(renderer.domElement);
    animate();
  })
  
  //add geometry
  geometry = new THREE.BoxGeometry();
  material = new THREE.MeshBasicMaterial({color: 0x0F1613, wireframe: true});
  cube = new THREE.Mesh(geometry, material);
  
  scene.add(cube);
  
  camera.position.z = 10;
  
  
  //animation
  let animate = ()=>{
    requestAnimationFrame(animate);
  
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  
  }
  
  
  return(<div id="cube"></div>)
  }

  export default Scene;