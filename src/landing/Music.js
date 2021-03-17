import musicFile from '../audio/1012889_For-Curiositys-Sake.mp3'
import fuegoFile from '../audio/fuego.mp3'
import plimFile from '../audio/BotWSheikahSensorPing.mp3'

let audioMusic, fuego, plim

let loadAudio = () => {
    audioMusic = document.createElement('audio')
    audioMusic.src = musicFile
    audioMusic.volume = 1;
    document.body.appendChild(audioMusic)


    fuego = document.createElement('audio')
    fuego.src = fuegoFile 
    fuego.volume = 0.5;
    fuego.loop = true
    document.body.appendChild(fuego)

    plim = document.createElement('audio')
    plim.src = plimFile 
    plim.volume = 1.0;
    document.body.appendChild(plim)


    
}

let play = () => {
    audioMusic.play();
    
}
let playFuego = () =>{
    fuego.play()
}
let playPlim = () =>{
    plim.play()
}

export default play
export { loadAudio, playFuego, playPlim }