import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

let loader = new FBXLoader();

let obj = new Promise((resolve, reject) => {
    loader.load('dist/models/CubePlane/CubePlane.fbx', function (object) {
        resolve(object)
    })
})

let loadCubePlane = (scene) => {
    obj.then(cube => {
        scene.add(cube)
        console.log(cube);
        let scale = 0.01
        cube.scale.set(scale, scale, scale)
    })
}

export default loadCubePlane