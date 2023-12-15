import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

//mesh
const geometry = new THREE.SphereGeometry(10, 64, 64);
// const material = new THREE.MeshStandardMaterial({ color: "#ff9d00" });

// const material = new THREE.MeshStandardMaterial({
//     metalness: 1, // between 0 and 1
//     roughness: 0.5, // between 0 and 1
//     // envMap: envMap,
// });

const material = new THREE.MeshPhongMaterial({
    color: "#ff9d00",
    specular: "#ff9d00",
    // envMap: envMap,
    combine: THREE.MultiplyOperation,
    shininess: 200,
    reflectivity: 5,
});

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let xDistance = 40;
        let zDistance = 40;
        let xOffset = -140;
        let zOffset = -140;

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = xDistance * i + xOffset;
        mesh.position.z = zDistance * j + zOffset;
        scene.add(mesh);
    }
}

//light
const light = new THREE.PointLight(0xffffff, 100, 200, 1.2);
light.position.set(0, 50, 50);
scene.add(light);

//camera
const camera = new THREE.PerspectiveCamera(45, 500 / 500, 0.1, 5000);
camera.position.z = 50;
scene.add(camera);

//renderer
const canvas = document.querySelector(".canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(500, 500);
renderer.render(scene, camera);

//controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.enablePan = false;
// controls.enableZoom = false;

const loop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
};
loop();
