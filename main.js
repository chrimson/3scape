import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

const clock = new THREE.Clock();

const renderer = new THREE.WebGLRenderer;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene;
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 0);

const carpet = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({color: 0x784315, side: THREE.DoubleSide}));
carpet.translateY(-4);
carpet.rotateX(0.5 * Math.PI);

const material = new THREE.MeshStandardMaterial({color: 0xefefdf, side: THREE.DoubleSide});
const wallN = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), material);
wallN.translateZ(-5);

const wallS = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), material);
wallS.translateZ(5);

const wallE = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), material);
wallE.translateX(5);
wallE.rotateY(0.5 * Math.PI);

const wallW = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), material);
wallW.translateX(-5);
wallW.rotateY(0.5 * Math.PI);

const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide}));
ceiling.translateY(4);
ceiling.rotateX(0.5 * Math.PI);

const group = new THREE.Group;
group.add(carpet);
group.add(wallN);
group.add(wallS);
group.add(wallE);
group.add(wallW);
group.add(ceiling);
scene.add(group);

const lightA = new THREE.AmbientLight(0x0f0f0e, 10);
scene.add(lightA);
const lightP = new THREE.PointLight(0x0f0f0e, 10000);
scene.add(lightP);

const controls = new FirstPersonControls(camera, renderer.domElement);
controls.movementSpeed = 0.5;
controls.lookSpeed = 0.1;

function animate() {
  controls.update(clock.getDelta());

  if (camera.position.x < -4.25) {
    camera.position.x = -4;
  }
  if (camera.position.x > 4.25) {
    camera.position.x = 4;
  }
  if (camera.position.y < -3.25) {
    camera.position.y = -3;
  }
  if (camera.position.y > 3.25) {
    camera.position.y = 3;
  }
  if (camera.position.z < -4.25) {
    camera.position.z = -4;
  }
  if (camera.position.z > 4.25) {
    camera.position.z = 4;
  }
//  console.log(camera.position);

  renderer.render(scene, camera);
}
