import './landing/css/style.scss'
import './landing/css/fire.scss'
import './landing/css/shining.scss'
import './landing/css/ui.scss'
import './landing/css/slidebar.scss'
import './landing/css/progressCircle.scss'
import startLanding from './landing/app.js'


import goTo from './scenes/SceneHandler'
import { loadAudio } from './landing/Music'


if(location.search == "?1"){
    goTo('game')
    loadAudio()
} else {
    startLanding()
}
