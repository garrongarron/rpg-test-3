import './landing/css/style.scss'
import './landing/css/fire.scss'
import './landing/css/shining.scss'
import './landing/css/ui.scss'
import './landing/css/slidebar.scss'
import startLanding from './landing/app.js'

import goTo from './scenes/SceneHandler'
import { loadAudio } from './landing/Music'

// startLanding()

goTo('game')
loadAudio()