import scene from '../basic/Scene.js'
import camera from '../basic/Camera.js'
import { directionalLight, ambientLight, hemiLight, pointLight } from '../basic/Lights.js'
import box from '../objects/Box.js'
import sky from '../sky/Sky.js'
import setFog, { resetFog } from '../basic/Fog.js'
import { loadPalading } from '../loader/Loader.js'
import loadPlaneTerrain, { closeTerrain } from '../terrain/PlaneTerrain.js'
import loadTextures from '../terrain/Textures.js'
import mouseController from './scene2/MouseController.js';
import { setAcumulated } from '../basic/Mouse.js'
import keyListener from '../basic/KeyListener.js'
import startTutorial, { finishTutorial } from './scene2/Tutorial.js'
import addGrass, { dropGrass } from '../grass/Grass.js'
import loadCubePlane from '../cubeplane/CubePlane.js'
import loadPeasant from '../peasant/Peasant.js'

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
        // scene.add(box)
        scene.add(sky)
        // loadCubePlane(scene);
        


        setFog(scene)
        keyListener.start()
        setAcumulated({ x: -246, y: -2675 })
        loadPalading().then(paladin => {
            this.paladin = paladin
            console.log(paladin);
            this.paladin.position.set(0, -6.75, 71.5)
            // this.paladin.position.set(0, -6.75, 0)
            camera.position.set(-2.37, -4.5, 61.7)
            scene.add(paladin)
            loadTextures().then(() => {
                loadPlaneTerrain(scene, this.paladin)
            })

            mouseController(this.paladin).on()
            startTutorial()
            addGrass(scene, paladin)
            loadPeasant(scene, paladin)//******************* */
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
        scene.remove(this.paladin);
        finishTutorial()
        closeTerrain()
        dropGrass()
    }
}

export default Scene2