import musicFile from '../audio/1012889_For-Curiositys-Sake.mp3'
import fuegoFile from '../audio/fuego.mp3'

let audioMusic, fuego

let loadAudio = () => {
    audioMusic = document.createElement('audio')
    audioMusic.src = musicFile
    audioMusic.volume = 1;
    document.body.appendChild(audioMusic)


    fuego = document.createElement('audio')
    fuego.src = fuegoFile
    fuego.volume = 0.2;
    fuego.loop = true
    document.body.appendChild(fuego)
}

let play = () => {
    audioMusic.play();
    
}
let playFuego = () =>{
    fuego.play()
}

export default play
export { loadAudio, playFuego }