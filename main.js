import * as THREE from 'three';

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
const planeN = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), material);
planeN.translateZ(-5);

const planeS = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), material);
planeS.translateZ(5);

const planeE = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), material);
planeE.translateX(5);
planeE.rotateY(0.5 * Math.PI);

const planeW = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), material);
planeW.translateX(-5);
planeW.rotateY(0.5 * Math.PI);

const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide}));
ceiling.translateY(4);
ceiling.rotateX(0.5 * Math.PI);

const group = new THREE.Group;
group.add(carpet);
group.add(planeN);
group.add(planeS);
group.add(planeE);
group.add(planeW);
group.add(ceiling);
group.rotateY(1/8 * Math.PI);

scene.add(group);

const lightA = new THREE.AmbientLight(0x0f0f0e, 10);
scene.add(lightA);
const lightP = new THREE.PointLight(0x0f0f0e, 10000);
scene.add(lightP);

function animate() {
  camera.rotation.y += 0.01;

  renderer.render(scene, camera);
}
