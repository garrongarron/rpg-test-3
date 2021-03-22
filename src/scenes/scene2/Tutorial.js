import { playPlim } from "../../landing/Music";
import basicContainer from "../../ui/modules/BasicContainer";
import title from "../../ui/modules/Title.js";
import SlideBar from '../../ui/modules/SlideBar.js'
import chest from "../../ui/modules/Chest";
import progressCircle from "../../ui/modules/ProgressCircle";


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
    if (isPressed(87)&& !isPressed(16)) {
        clearTimeout(timeoutN)
        progressCircle.close()
        progressCircle.start()
        console.log('re-start');
        timeoutN = setTimeout(() => {
            console.log('Achivement');
            basicContainer.show('Walk backwards', "Press [S] to walk backwards", 'S')
            mission = mission2
            playPlim()
            progressCircle.close()
            slideBar.getBar().style.background = 'linear-gradient(90deg, #fbff00 25%, #ffc0cb00 0%)'
            slideBar.setLabel('25/100')
        }, 2 * 1000);
    } else {
        clearTimeout(timeoutN)
        progressCircle.close()
        console.log('clean up');
    }
}
let mission2 = () => {
    if (isPressed(83)&& !isPressed(16)) {
        clearTimeout(timeoutN)
        progressCircle.close()
        progressCircle.start()
        console.log('re-start');
        timeoutN = setTimeout(() => {
            console.log('Achivement');
            basicContainer.show('Run ahead', "Press [SHIFT]+[W] to run ahead", '.W')
            mission = mission3
            playPlim()
            progressCircle.close()
            slideBar.getBar().style.background = 'linear-gradient(90deg, #fbff00 50%, #ffc0cb00 0%)'
            slideBar.setLabel('50/100')
        }, 2 * 1000);
    } else {
        clearTimeout(timeoutN)
        progressCircle.close()
        console.log('clean up');
    }
}
let mission3 = () => {
    if (isPressed(87) && isPressed(16)) {
        clearTimeout(timeoutN)
        progressCircle.close()
        progressCircle.start()
        console.log('re-start');
        progressCircle.start()
        timeoutN = setTimeout(() => {
            console.log('Achivement');
            basicContainer.show('Run backwards', "Press [SHIFT]+[S] to run backwards", '.S')
            mission = mission4
            playPlim()
            progressCircle.close()
            slideBar.getBar().style.background = 'linear-gradient(90deg, #fbff00 75%, #ffc0cb00 0%)'
            slideBar.setLabel('75/100')
        }, 2 * 1000);
    } else {
        clearTimeout(timeoutN)
        progressCircle.close()
        console.log('clean up');
    }
}
let mission4 = () => {
    if (isPressed(83) && isPressed(16)) {
        clearTimeout(timeoutN)
        progressCircle.close()
        progressCircle.start()
        console.log('re-start');
        timeoutN = setTimeout(() => {
            console.log('Achivement');
            basicContainer.show('Tutor', "Well done!", 'XD')
            mission = null
            playPlim()
            progressCircle.close()
            slideBar.getBar().style.background = 'linear-gradient(90deg, #fbff00 100%, #ffc0cb00 0%)'
            slideBar.setLabel('100/100')
            title.close()
            setTimeout(() => {
                chest.setTitle('Congratulations')
                chest.start()
            }, 1000*2);
        }, 2 * 1000);
    } else {
        clearTimeout(timeoutN)
        progressCircle.close()
        console.log('clean up');
    }
}

let mission = null
let ask = () => {
    if (typeof mission == 'function') mission()
}
let up = (e) => {
    memoryKey.set(e.keyCode, false)
    ask()
}

let slideBar = new SlideBar()
let startTutorial = () => {
    title.start()
    slideBar.show()
    slideBar.get().classList.add('gold')
    slideBar.getBar().style.background = 'linear-gradient(90deg, #fbff00 0%, #ffc0cb00 0%)'
    slideBar.setLabel('0/100')



    basicContainer.show('Walk ahead', "Press [W] to walk ahead", 'W')
    document.addEventListener('keydown', down)
    document.addEventListener('keyup', up)
    mission = mission1
}

let finishTutorial = () =>{
    title.close()
    slideBar.hide()
    basicContainer.hide()
    document.removeEventListener('keydown', down)
    document.removeEventListener('keyup', up)
    progressCircle.close()
    chest.close()
}


export default startTutorial
export { finishTutorial }