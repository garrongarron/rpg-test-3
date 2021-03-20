import geometry from "./Geometry.js"
import { getMaterial } from "./Material.js"
import camera from '../basic/Camera.js'
import assetsInPromise from "./Loader.js"
import { Mesh } from 'three'

import machine from '../basic/Machine.js'



let assetsReady = () => {
    return assetsInPromise
}
let addGrass = (scene) => {
    assetsReady().then(() => {
        // getMaterial()
        const grass = new Mesh(geometry, getMaterial())
        grass.frustumCulled = false
        grass.renderOrder = 10
        grass.frustumCulled = false  // always draw, never cull
        grass.rotation.x = -Math.PI / 2
        grass.name = "GRASS"
        machine.addCallback(()=>{
            grass.material.uniforms['time'].value += .01
            grass.material.uniforms.drawPos.value = [camera.position.x, -camera.position.z]
        })
        
        scene.add(grass)
        grass.position.y -=7.2
        console.log(grass);
    })
}

export default addGrass