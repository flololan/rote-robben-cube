import * as THREE from 'three';
import TrackballControls from 'three-trackballcontrols';
import './styles.css';
var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const texture = new THREE.TextureLoader().load('robben.jpg');
const background = new THREE.TextureLoader().load('background.jpg');


var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
const controls = new TrackballControls(camera, renderer.domElement);


var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({ map: texture });
var cube = new THREE.Mesh(geometry, material);
scene.background = background;
scene.add(cube);
camera.position.z = 1000;

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}


var animate = function () {
    requestAnimationFrame(animate)
    controls.update()
    render()

}

function render() {
    renderer.render(scene, camera);
};
animate();