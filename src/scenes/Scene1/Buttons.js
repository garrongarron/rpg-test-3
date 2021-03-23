import { dropFireShader } from "../../landing/Fire"

let tutorial, start, background, menu
let setUp = () => {
    tutorial = document.createElement('div')
    tutorial.classList.add('scene1-tutorial')
    tutorial.innerText = 'Tutorial'

    start = document.createElement('div')
    start.classList.add('scene1-start')
    start.innerText = 'Start'


    background = document.createElement('div')
    background.classList.add('scene1-background')


    menu = document.createElement('div')
    menu.classList.add('scene1-menu')
    menu.classList.add('hide')

    menu.appendChild(background)
    menu.appendChild(start)
    menu.appendChild(tutorial)

    tutorial.addEventListener('click', () => {
        console.log('tutorial')
        hide()
        setTimeout(() => {
            action()
        }, 2 * 1000);
    })

    start.addEventListener('click', () => {
        console.log('start')
        hide()
        setTimeout(() => {
            action()
        }, 2 * 1000);
    })
}

let action = null

let show = (callback) => {
    setUp()
    menu.classList.remove('hide')
    menu.classList.add('fadeIn')
    action = callback
    document.body.appendChild(menu)
}

let hide = () => {
    menu.classList.add('fadeOut2')
    menu.classList.remove('fadeIn')
    let canvas  = document.getElementById('c')
    canvas.classList.add('fadeOut2')
    dropFireShader()

    setTimeout(() => {
        canvas.classList.remove('fadeOut2')
        canvas.classList.remove('hide')
        canvas.classList.add('fadeIn')
        menu.remove()
    }, 2 * 1000);
}

export default show