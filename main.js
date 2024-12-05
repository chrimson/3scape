import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.rotateX(-1/8 * Math.PI);
camera.position.set(0, 1, 3);

const geometry = new THREE.PlaneGeometry(1, 1, 10, 10);
const material = new THREE.MeshStandardMaterial({color: 0xefefdf, side: THREE.DoubleSide});

const planeN = new THREE.Mesh(geometry, material);
planeN.translateZ(-0.5);

const planeE = new THREE.Mesh(geometry, material);
planeE.translateX(0.5);
planeE.rotateY(0.5 * Math.PI);

const planeW = new THREE.Mesh(geometry, material);
planeW.translateX(-0.5);
planeW.rotateY(0.5 * Math.PI);

const group = new THREE.Group;
group.add(planeN);
group.add(planeE);
group.add(planeW);
group.rotateY(1/8 * Math.PI);

scene.add(group);

const lightA = new THREE.AmbientLight(0x0f0f0e, 10);
scene.add(lightA);
const lightP = new THREE.PointLight(0x0f0f0e, 100);
scene.add(lightP);

function animate() {
  renderer.render(scene, camera);
}
