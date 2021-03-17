import { loadAnimations } from "../warrior/AnimationLoader";
import character from "../warrior/CharacterPull";


let out = null
let loadPalading = () => {
    if(out != null) return out
    let paladingInPromise = character.createInPromise('Paladin')
    let animationInPromise = loadAnimations()

    out = new Promise((resolve, reject)=>{
        Promise.all([paladingInPromise, animationInPromise]).then(response => {
            response[1][0] = response[0].animations[0]
            response[0].animations = response[1]
            resolve(response[0])
        })
    })
    return out
}

export { loadPalading }