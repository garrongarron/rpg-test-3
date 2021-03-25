import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import noise from '../terrain/NoiseMaker.js'
import params from '../terrain/PerlinCofig.js'
import machine from '../basic/Machine.js'
import getAnimations from '../warrior/AnimationLoader.js'
import { AnimationMixer, Clock } from 'three'


let loader = new FBXLoader();

let obj = new Promise((resolve, reject) => {
    loader.load('dist/models/Peasant/peasant_man.fbx', function (object) {
        resolve(object)
    })
})


let loadPeasant = (scene, paladin) => {
    obj.then(man => {
        scene.add(man)
        console.log(man);
        let scale = 0.017
        man.scale.set(scale, scale, scale)
        let gen = new noise.Noise(params)



        let animation = getAnimations()
        console.log(animation);

        let mixer = new AnimationMixer(man)
        let clock = new Clock()
        // man.animations = animation.map(e => e)
        let clip = mixer.clipAction(man.animations[0])
        clip.play()

        man.position.x = 3
        man.position.y = gen.Get(man.position.x, man.position.z) - 7
        machine.addCallback(() => {
            man.lookAt(paladin.position)
            const delta = clock.getDelta();
            mixer.update(delta);
        })
    })
}

export default loadPeasant