import './style.css'
import * as THREE from "three";
import {PointerLockControls} from "./node_modules/three/examples/jsm/controls/PointerLockControls";
import {OrbitControls} from "./node_modules/three/examples/jsm/controls/OrbitControls"


const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bg")});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);
camera.position.setY(1);

const geometry = new THREE.OctahedronGeometry(5,1);
const material = new THREE.MeshStandardMaterial({color: 0x9700FF , wireframe: true});

const object = new THREE.Mesh(geometry,material);

scene.add(object);

const pointlight = new THREE.PointLight(0xffffff);
pointlight.position.set(5,5,5)

const ambientlight = new THREE.AmbientLight(0xffffff);

scene.add(pointlight,ambientlight);

const gridHelper = new THREE.GridHelper(200,50);
const lightHelper = new THREE.PointLightHelper(pointlight);

scene.add(gridHelper,lightHelper);

const controler = new PointerLockControls( camera,renderer.domElement );

addEventListener( 'click', function () {

  controler.lock();

} );



function update()
{
  requestAnimationFrame(update);

  object.rotation.x += 0.01;
  object.rotation.y += 0.01;
  object.rotation.z += 0.01;



  renderer.render(scene,camera);
}

update();