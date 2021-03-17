import StateMachine from './StateMachine.js'
import machine from '../../basic/Machine.js'
import gravity from '../../basic/Gravity.js'
// import { collision } from '../character/InFront.js'

let speed = 3 //per second
speed = 10 //running 
let angle = 90 * Math.PI / 180 //per second
let prev = 1000
class ForwardBackwardAndRotation {

    constructor(character) {
        this.position = character.position
        this.rotation = character.rotation
        this.stateMachine = new StateMachine(character)
        this.stateDefautl = {
            up: false,
            down: false,
            left: false,
            right: false,
            up: false,
            sprint: false,
            stealth: false,
            attack: false,
            jump: false
        }
        this.state = Object.assign({}, this.stateDefautl)
        this.angle = angle
        this.speed = speed

        this.machine = machine.addCallback(() => {
            this.speed = 3
            if (this.state.sprint) this.speed = 10
            if (this.state.stealth) this.speed = 2

            if (!this.state.sprint && !this.state.stealth) {//caminando
                if (this.state.up) this.stateMachine.set('walkAhead')
                else if (this.state.down) this.stateMachine.set('walkBack')
                else if (this.state.attack) this.stateMachine.set('attack')
                else if (this.state.jump) this.stateMachine.set('block')
                else this.stateMachine.set('idle')
            } else if (this.state.sprint) {//corriendo
                if (this.state.up) {
                    if (this.state.jump) this.stateMachine.set('jump')
                    else this.stateMachine.set('runAhead')
                } else if (this.state.down) {
                    this.stateMachine.set('runBack')
                }
            } else if (this.state.stealth) {
                if (this.state.up) this.stateMachine.set('stealthAhead')
                else if (this.state.down) this.stateMachine.set('stealthBack')
                else this.stateMachine.set('stealth')
            }
            this.state = Object.assign({}, this.stateDefautl)
        })
    }

    up(deltaTime) {
        // if(collision) return
        this.position.set(
            this.position.x + Math.sin(this.rotation.y) * this.speed * deltaTime,
            this.position.y,
            this.position.z + Math.cos(this.rotation.y) * this.speed * deltaTime,
        )
        this.state.up = true
        let ckecked = gravity.check(this.position)
        if (ckecked.isGrounded) {
            this.position.y -= ckecked.tmp.distance - 1
        }
        // console.log(ckecked.isGrounded);
    }

    down(deltaTime) {
        this.position.set(
            this.position.x - Math.sin(this.rotation.y) * this.speed * deltaTime,
            this.position.y,
            this.position.z - Math.cos(this.rotation.y) * this.speed * deltaTime,
        )
        this.state.down = true
        let ckecked = gravity.check(this.position)
        if (ckecked.isGrounded) {
            this.position.y -= ckecked.tmp.distance - 1
        }
    }

    left(deltaTime) {
        this.rotation.y += this.angle * deltaTime * (1 / (90 / (90 - this.position.y * 2)))
        this.state.left = true
    }

    right(deltaTime) {
        this.rotation.y -= this.angle * deltaTime * (1 / (90 / (90 - this.position.y * 2)))
        this.state.right = true
    }

    sprint(deltaTime) {
        this.state.sprint = true
    }

    stealth(deltaTime) {
        this.state.stealth = true
    }

    attack(deltaTime) {
        this.state.attack = true
    }

    jump(deltaTime) {
        this.state.jump = true
    }

    noKeyPressed(deltaTime) {
        // this.stateMachine.set('idle')
    }
}

export default ForwardBackwardAndRotation