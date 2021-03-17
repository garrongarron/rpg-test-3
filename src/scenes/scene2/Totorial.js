import { playPlim } from "../../landing/Music";
import basicContainer from "../../ui/modules/BasicContainer";

let timeoutN

let memoryKey = new Map()

let down = (e) => {
    if (!memoryKey.has(e.keyCode)) {
        memoryKey.set(e.keyCode, true)
    } else {
        if (memoryKey.get(e.keyCode)) {
            return
        } else {
            memoryKey.set(e.keyCode, true)
        }
    }
    ask()
}

let isPressed = (keycode) => {
    if (!memoryKey.has(keycode))
        return false
    else {
        return memoryKey.get(keycode)
    }
}
let mission1 = () => {
    if (isPressed(87)) {
        clearTimeout(timeoutN)
        console.log('re-start');
        timeoutN = setTimeout(() => {
            console.log('Achivement');
            basicContainer.show('Walk backwards', "Press [S] to walk backwards", 'S')
            mission = mission2
            playPlim()
            
        }, 2 * 1000);
    } else {
        clearTimeout(timeoutN)
        console.log('clean up');
    }
}
let mission2 = () => {
    if (isPressed(83)) {
        clearTimeout(timeoutN)
        console.log('re-start');
        timeoutN = setTimeout(() => {
            console.log('Achivement');
            basicContainer.show('Run ahead', "Press [SHIFT]+[W] to run ahead", '.W')
            mission = mission3
            playPlim()
        }, 2 * 1000);
    } else {
        clearTimeout(timeoutN)
        console.log('clean up');
    }
}
let mission3 = () => {
    if (isPressed(87) && isPressed(16)) {
        clearTimeout(timeoutN)
        console.log('re-start');
        timeoutN = setTimeout(() => {
            console.log('Achivement');
            basicContainer.show('Run backwards', "Press [SHIFT]+[S] to run backwards", '.S')
            mission = mission4
            playPlim()
        }, 2 * 1000);
    } else {
        clearTimeout(timeoutN)
        console.log('clean up');
    }
}
let mission4 = () => {
    if (isPressed(83) && isPressed(16)) {
        clearTimeout(timeoutN)
        console.log('re-start');
        timeoutN = setTimeout(() => {
            console.log('Achivement');
            basicContainer.show('Tutor', "Well done!", 'XD')
            mission = null
            playPlim()
        }, 2 * 1000);
    } else {
        clearTimeout(timeoutN)
        console.log('clean up');
    }
}





let mission = null
let ask = () => {
    if(typeof mission == 'function') mission()
}
let up = (e) => {
    memoryKey.set(e.keyCode, false)
}

let startTutorial = () => {
    basicContainer.show('Walk ahead', "Press [W] to walk ahead", 'W')
    document.addEventListener('keydown', down)
    document.addEventListener('keyup', up)
    mission = mission1
}


export default startTutorial