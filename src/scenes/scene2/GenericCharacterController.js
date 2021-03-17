import ForwardBackwardAndRotation from './ForwardBackwardAndRotation.js'
import { getDelta } from '../../basic/Clock.js'
import machine from '../../basic/Machine.js'


let lastN = []

class GenericCharacterController {
    constructor(character) {
        this.character = character
        this.controller = new ForwardBackwardAndRotation(character)
        this.keyMemory = new Map()
        machine.addCallback(() => {
            this.frame()
        })
    }

    isPressed(keyCode) {
        if (!this.keyMemory.has(keyCode)) {
            return false
        } else {
            return this.keyMemory.get(keyCode)
        }
    }

    processKeys(input) {
        if (!this.keyMemory.has(input.key[0])) {
            this.keyMemory.set(input.key[0], input.key[1])
        } else {
            if (this.keyMemory.get(input.key[0]) == input.key[1]) return
            else {
                this.keyMemory.set(input.key[0], input.key[1])
            }
        }
    }
    
    update(input) {
        //keys
        if (input.key) {
            this.processKeys(input)
        }
        //anlgle
        if (input.angle) {
            this.character.rotation.y = input.angle
        }
        //position
        if (input.position) {
            this.character.position.x = input.position.x
            this.character.position.y = input.position.y
            this.character.position.z = input.position.z
        }
    }

    frame() {
        let deltaTime = getDelta()
        //softener
        lastN.push(deltaTime)
        if (lastN.length > 10) {
            deltaTime = lastN.reduce((a, b) => a + b, 0) / 11;
            lastN.shift()
        }

        if (this.isPressed(87)) {
            this.controller.up(deltaTime)
        }
        if (this.isPressed(83)) {
            this.controller.down(deltaTime)
        }
        if (this.isPressed(65)) {
            this.controller.left(deltaTime)
        }
        if (this.isPressed(68)) {
            this.controller.right(deltaTime)
        }
        if (this.isPressed(16)) {
            this.controller.sprint(deltaTime)
        }
        if (this.isPressed(32)) {
            this.controller.stealth(deltaTime)
        }
        if (this.isPressed(69)) {
            this.controller.attack(deltaTime)
        }
        if (this.isPressed(81)) {
            this.controller.jump(deltaTime)
        }
    }
}

export default GenericCharacterController