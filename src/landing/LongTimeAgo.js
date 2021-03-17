import show from '../scenes/Scene1/Buttons.js'
import goTo from '../scenes/SceneHandler.js'

let p, container, listText

let start = () => {
    p = document.createElement('p')

    container = document.createElement('div')
    container.classList.add('shining')

    listText = [
        'Long time ago...',
        '...in a far away...',
        '...a brave warrior named Samu...',
        '...fight for something more than just his own happines..',
        '...he fought to free his people...'
    ]
    // container.appendChild(title)
    container.appendChild(p)
    document.body.appendChild(container)
}

let finish = () =>{
    container.remove()
}

let longTimeAgo = () => {
    start()
    p.innerText = listText.shift()
    p.classList.add('gradient')

    let timer = null
    timer = setInterval(() => {
        if (listText.length == 0) {
            p.classList.remove('gradient')
            p.classList.add('hide')
            finish()
            return
        }
        p.innerText = listText.shift()
        p.classList.remove('gradient')
        p.classList.add('hide')
        if(listText.length ==0){
            setTimeout(() => {
                console.log('no more');
                show(()=>{
                    goTo('game')
                })
            }, 8*1000);
        }
        setTimeout(() => {
            p.classList.remove('hide')
            p.classList.add('gradient')
        }, 1000);
    }, 8 * 1000);
}
export default longTimeAgo