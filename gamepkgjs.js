const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

const geometry = new THREE.SphereGeometry(6, 1280, 1280);
const material = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
const lightbomb = new THREE.Mesh(geometry, material);
scene.add(lightbomb);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
