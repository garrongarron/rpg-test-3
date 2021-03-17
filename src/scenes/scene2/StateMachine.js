import Animator from '../../basic/Animator.js'


class StateMachine {
    constructor(character) {
        this.anim = new Animator(character)
        this.loop = false
        this.timeScale = 1
        this.n = 26
    }
    set(state) {
        this.timeScale = 1
        this.loop = false
        if (state == 'runAhead') {
            this.n = 36
        } else if (state == 'runBack') {
            this.n = 35
        } else if (state == 'walkAhead') {
            this.n = 49
        } else if (state == 'walkBack') {
            this.n = 48
        } else if (state == 'stealthAhead') {
            this.n = 50
        } else if (state == 'stealthBack') {
            this.n = 51
        } else if (state == 'stealth') {
            this.n = 17
        } else if (state == 'attack') {
            this.n = 41
            this.timeScale = 2
            this.loop = true
        } else if (state == 'block') {
            this.n = 10
            this.timeScale = 2
        } else if (state == 'jump') {
            this.n = 52
        } else if (state == 'idle') {
            this.n = 26
        } else {
            this.n = 26
        }
        this.anim.action(this.n, this.timeScale, this.loop)
    }
}



export default StateMachine