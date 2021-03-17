import longTimeAgo from "./LongTimeAgo.js"
import play from './Music.js'
import goTo from '../scenes/SceneHandler.js';
// import { loadPalading } from "../loader/Loader.js";


let btn, title, container, start

let goToCinematic = () => {
    longTimeAgo()
    goTo('intro')
}

let startIntro = () => {
    play()
    document.querySelector('#container').classList.add('fadeOut')
    btn.classList.remove('beating1')
    btn.classList.add('fadeOut2')
    title.classList.add('fadeOut2')
    setTimeout(() => {
        btn.classList.add('hide')
        title.classList.add('hide')
    }, 2000);
    setTimeout(() => {

        document.querySelector('#container').remove()
        hideLogo()
        start = true
        try {
            loadPalading().then((paladin) => {
                goToCinematic()
            })
        } catch (error) {
            goToCinematic()
        }
        console.log('done');
    }, 4 * 1000);
}

let showLogo = () => {
    btn = document.createElement('div')
    btn.innerHTML = "Play Now"
    btn.classList.add('beating1')

    btn.addEventListener('click', startIntro)

    title = document.createElement('h1')
    title.innerText = 'The Warrior'

    container = document.createElement('div')
    container.appendChild(title)
    container.appendChild(btn)

    container.classList.add('play-now')
    document.body.appendChild(container)
}

let hideLogo = () => {
    container.remove()
}

let goToIntro = () => {
    return start
}
export default goToIntro
export { showLogo, goToCinematic }

