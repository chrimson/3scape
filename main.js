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

const carpet = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({color: 0xf0862a, side: THREE.DoubleSide}));
carpet.translateY(-4);
carpet.rotateX(0.5 * Math.PI);

const material = new THREE.MeshStandardMaterial({color: 0xcfcfef, side: THREE.DoubleSide});
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
const wallC = new THREE.Mesh(new THREE.PlaneGeometry(5, 8), material);
wallC.translateX(-3.75);
wallC.translateZ(3.75);
wallC.rotateY(-0.25 * Math.PI);

const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide}));
ceiling.translateY(4);
ceiling.rotateX(0.5 * Math.PI);

const shade = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
const shadeN = new THREE.Mesh(new THREE.PlaneGeometry(3, 5), shade);
shadeN.translateZ(-4.95);
const shadeE = new THREE.Mesh(new THREE.PlaneGeometry(3, 5), shade);
shadeE.translateZ(-3);
shadeE.translateX(4.95);
shadeE.rotateY(0.5 * Math.PI);

const door = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
const doorSL = new THREE.Mesh(new THREE.PlaneGeometry(2, 7), door);
doorSL.translateX(2);
doorSL.translateY(-0.5);
doorSL.translateZ(4.95);
const doorSR = new THREE.Mesh(new THREE.PlaneGeometry(2, 7), door);
doorSR.translateX(-0.05);
doorSR.translateY(-0.5);
doorSR.translateZ(4.95);
const doorC = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 7), door);
doorC.translateX(-3.7);
doorC.translateY(-0.5);
doorC.translateZ(3.7);
doorC.rotateY(-0.25 * Math.PI);

const group = new THREE.Group;
group.add(carpet);
group.add(wallN);
group.add(wallS);
group.add(wallE);
group.add(wallW);
group.add(wallC);
group.add(ceiling);
group.add(shadeN);
group.add(shadeE);
group.add(doorSL);
group.add(doorSR);
group.add(doorC);
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
