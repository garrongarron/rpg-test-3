import GenericCharacterController from '../scenes/scene2/GenericCharacterController.js'
import { loadPalading } from '../loader/Loader.js'

let controller = null

loadPalading().then(p => {
    controller = new GenericCharacterController(p)
})


let localKeyProcess = (keys) => {
    if (controller == null) return
    controller.update({
        key: keys
    })
}

let localAngleProcess = (angle) =>{
    if (controller == null) return
    controller.update({
        angle: angle
    })
}

export default localKeyProcess
export { localAngleProcess }