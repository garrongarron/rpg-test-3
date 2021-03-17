import { acumulated, delta } from '../../basic/Mouse.js'
import machine from '../../basic/Machine.js'
import camera from '../../basic/Camera.js'
import { MathUtils } from 'three'
import { getDelta } from '../../basic/Clock.js'
import gravity from '../../basic/Gravity.js'
// import checkAngle from './AngleEmmiter.js'


// import '../objects/pointer.js'
// import './ShooterSystem.js'

let interpolation = .99
let rotation = 0
let gap = -20
let rotationWithGap = 0
let radio = 10
// let speed = 5
let lastN = []
let rotationSpeed = 20
let characterHeight = 2
// let cameraAngle = 3
let prevAcumulatedY = 0

let target = null

let theCallback = () => {
    let angleRotation = (acumulated.x / rotationSpeed)
    rotation = - (angleRotation) * Math.PI / 180
    rotationWithGap = - (angleRotation + gap) * Math.PI / 180
    let rotationWithGap2 = - (angleRotation + gap / 2) * Math.PI / 180

    let x = target.position.x - Math.sin(rotation) * radio;
    camera.position.x = MathUtils.lerp(camera.position.x, x, interpolation)

    let z = target.position.z - Math.cos(rotation) * radio;
    camera.position.z = MathUtils.lerp(camera.position.z, z, interpolation)


    let g = gravity.check(camera.position)
    // console.log(camera.position.y);
    
    if (g.tmp != undefined) {
        if (g.tmp.distance < 2) {
            camera.position.y += 2 - g.tmp.distance;
        }
    }

    if (prevAcumulatedY == delta.y) {
        delta.y = 0
    }

    prevAcumulatedY = delta.y
    camera.position.y += delta.y / 100

    let opositeCamPosition = {
        position: {
            x: target.position.x + Math.sin(rotationWithGap) * radio,
            z: target.position.z + Math.cos(rotationWithGap) * radio
        }
    }

    // camera.lookAt(opositeCamPosition.position.x, target.position.y - cameraAngle, opositeCamPosition.position.z)
    camera.lookAt(opositeCamPosition.position.x, target.position.y + characterHeight, opositeCamPosition.position.z)

    let n = getDelta()
    lastN.push(n)
    if (lastN.length > 10) {
        n = lastN.reduce((a, b) => a + b, 0) / 11;
        lastN.shift()
    }
    // checkAngle(rotationWithGap2)
}
let on = () => {
    machine.addCallback(theCallback)
}
let off = () => {
    machine.removeCallback(theCallback)
}
let setTarget = (t) => {
    target = t
    return {
        on, off
    }
}

export default setTarget