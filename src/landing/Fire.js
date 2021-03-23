import { stopFire } from "./LoadIntro.js"

let loadFire = () => {
    let fire = document.createElement('div')
    fire.classList.add('fire')
    for (let index = 0; index < 150; index++) {
        let particle = document.createElement('div')
        particle.classList.add('particle')
        fire.appendChild(particle)
    }
    document.body.appendChild(fire)
}

let dropFire = () => {
    let fire = document.querySelector('.fire')
    fire.classList.add('fadeOut2')
    setTimeout(() => {
        fire.remove()
    }, 2 * 1000)
}

let dropFireShader = () =>{
    document.querySelector('#container').classList.add('fadeOut2')
    setTimeout(() => {
        document.querySelector('#container').remove()
        stopFire()
    }, 1000*2);
}

export default loadFire
export { dropFire, dropFireShader }