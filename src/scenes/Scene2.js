import scene from '../basic/Scene.js'
import camera from '../basic/Camera.js'
import { directionalLight, ambientLight, hemiLight, pointLight } from '../basic/Lights.js'
import box from '../objects/Box.js'
import sky from '../sky/Sky.js'
import setFog, { resetFog } from '../basic/Fog.js'
import { loadPalading } from '../loader/Loader.js'
import loadPlaneTerrain, { setTarget } from '../terrain/PlaneTerrain.js'
import { Color } from 'three'
import loadTextures from '../terrain/Textures.js'
import mouseController from './scene2/MouseController.js';
import startMouseSystem, { setAcumulated, stop as mouseStop } from '../basic/Mouse.js'
import keyListener from '../basic/KeyListener.js'
import machine from '../basic/Machine.js'
import startUI from '../ui/app.js'
import startTutorial from './scene2/Tutorial.js'
import addGrass from '../grass/Grass.js'


loadTextures()
class Scene2 {
    constructor(goTo) {
        this.keyListener = [this.next.bind(this)]
        this.goTo = goTo
        this.originalData = {}
    }
    next() {
        console.log('repetido');
        // this.goTo('intro')
    }

    start() { 
        // machine.cleanCallbacks()
        scene.add(directionalLight);
        scene.add(ambientLight);
        scene.add(hemiLight);
        scene.add(pointLight);
        scene.add(box)
        scene.add(sky)
        setFog(scene)
        keyListener.start()
        setAcumulated({ x: -246, y: -2675 })
        loadPalading().then(paladin => {
            this.paladin = paladin
            this.paladin.position.set(0, -6.75, 71.5)
            // this.paladin.position.set(0, -6.75, 0)
            camera.position.set(-2.37, -4.5,  61.7)
            scene.add(paladin)
            // console.log(paladin);
            loadTextures().then(()=>{
                loadPlaneTerrain(scene, this.paladin)
            })
            
            // startMouseSystem()
            mouseController(this.paladin).on()
            startTutorial()
            startUI()
            addGrass(scene, paladin)
        })
        
    }

    stop() {
        scene.remove(directionalLight);
        scene.remove(ambientLight);
        scene.remove(hemiLight);
        scene.remove(pointLight);
        scene.remove(box)
        scene.remove(sky)
        resetFog(scene)
        keyListener.stop()
        setAcumulated({ x: 0, y: 0 })
        mouseController(this.paladin).off()
        mouseStop()
        // scene.remove(this.paladin)
        // scene.remove(this.terrain)
    }
}

export default Scene2