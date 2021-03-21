import musicFile from '../audio/1012889_For-Curiositys-Sake.mp3'
import fuegoFile from '../audio/fuego.mp3'
import plimFile from '../audio/BotWSheikahSensorPing.mp3'
import volume from '../ui/modules/Volume.js'

let audioMusic, fuego, plim

let loadAudio = () => {
    audioMusic = document.createElement('audio')
    audioMusic.src = musicFile
    audioMusic._volume = 1;
    document.body.appendChild(audioMusic)


    fuego = document.createElement('audio')
    fuego.src = fuegoFile
    fuego._volume = 0.5;
    fuego.loop = true
    document.body.appendChild(fuego)

    plim = document.createElement('audio')
    plim.src = plimFile
    plim._volume = 1.0;
    document.body.appendChild(plim)



}

let play = () => {
    audioMusic.volume = audioMusic._volume * volume.getVolume()
    audioMusic.play();
    volume.subscribe((level) => {
        audioMusic.volume = level
        // audioMusic.play()
    })
}
let playFuego = () => {
    fuego.volume = fuego._volume * volume.getVolume()
    fuego.play()
    volume.subscribe((level) => {
        fuego.volume = level
        // fuego.play()
    })
}
let playPlim = () => {
    plim.volume = plim._volume * volume.getVolume()
    plim.play()
    volume.subscribe((level) => {
        plim.volume = level
        // plim.play()
    })
}

export default play
export { loadAudio, playFuego, playPlim }