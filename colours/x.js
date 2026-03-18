import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setClearColor( 0x000000, 0 ); // the default

const controls = new OrbitControls( camera, renderer.domElement );
const loader2 = new GLTFLoader();

const container = document.getElementById('threejs-x');

const colors = ['0xC2FFFA', '0x305CDE', '0x851E55', '0xFFFBAB']

if (container) {
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(container.offsetWidth, container.offsetHeight);

container.appendChild(renderer.domElement);



renderer.setAnimationLoop( animate );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // white light, intensity 2
directionalLight.position.set(1, 1, 1).normalize(); // position the light
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100); // white light, intensity 1, distance 100
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

camera.position.z = 5;
camera.position.y -= 2;

function animate( time ) {

  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
  cube.rotation.z = time / 500;

  renderer.render( scene, camera );

}

 document.addEventListener("click", (event) => {
    cube.material.color.setHex(colors[Math.floor(Math.random()*colors.length)]);
    //console.log(camera.position.y);

    if (camera.position.y > -1) {
        camera.position.y -= 0.8;
    }
    if ((Math.floor(Math.random() * 10) + 1) >= 5) {
    camera.position.y += 0.4;
    } else {
    camera.position.y -= 0.4;
    }
    animate();
});
}


