import camera from '../basic/Camera.js'
import assetsInPromise from "./Loader.js"
import machine from '../basic/Machine.js'
import GrassChunkManager from "./GrassChunkManager.js"
import config from "./Config.js"

let unit = config.GRASS_PATCH_RADIUS * 2
let assetsReady = () => {
    return assetsInPromise
}
let addGrass = (scene, paladin) => {
    assetsReady().then(() => {
        // getMaterial()
        let grassChunkManager = new GrassChunkManager(scene)



        
        machine.addCallback(() => {
            let offset = {
                x: Math.round(paladin.position.x / unit) * unit,
                y: -Math.round(paladin.position.z / unit) * unit
            }
            grassChunkManager.init(offset)
            // grass.material.uniforms['time'].value += .01
            // grass.material.uniforms.drawPos.value = [camera.position.x, -camera.position.z]
        })

        scene.add(grass)

        console.log(grass);
    })
}

export default addGrass