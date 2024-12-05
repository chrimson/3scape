import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 1, 1, 1, 5, 5, 5 );
const material = new THREE.MeshStandardMaterial;
const cube = new THREE.Mesh( geometry, material );
cube.rotateX(1/4 * Math.PI);
cube.rotateY(1/4 * Math.PI);
scene.add( cube );

const light = new THREE.AmbientLight( 0xfff, 0.05 );
scene.add( light );

const light1 = new THREE.PointLight( 0x00f, 10000 );
scene.add( light1 );

camera.position.set(0, 0, 5);
light1.position.z = 5;
light1.position.x = 2;
light1.position.y = -1;

function animate() {

	const time = Date.now() * 0.0005;

	renderer.render( scene, camera );

}
