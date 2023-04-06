let renderer, scene, camera

class Car {
    constructor() {
        const tireGeo = new THREE.SphereGeometry(5, 1280, 1280)

        const tireMat = new THREE.MeshPhongMaterial({ color: 0xffff00 })

        this.tire = new THREE.Mesh(tireGeo, tireMat)

    }
}

function createCar() {
    const carObj = new Car()
    scene.add(carObj)
}

function init() {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.set(30, 30, 30)
    camera.lookAt(scene.position)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    const planeGeometry = new THREE.PlaneGeometry(60, 60)
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
    let plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    plane.position.set(0, -7, 0)
    scene.add(plane)

    createCar()

    let spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-10, 40, 30)
    scene.add(spotLight)
    document.body.appendChild(renderer.domElement)
}

function render() {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}
init()
render()