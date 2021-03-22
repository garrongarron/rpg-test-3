import loadTextures, { addCallback } from './Textures.js'
import ChunkManagers from './ChunkManager.js'

let params = {
  noiseType: 'perlin',
  scale: 100,
  octaves: 1,
  persistence: .22,
  lacunarity: 4.9,//6.9,
  exponentiation: 5.8,
  seed: 1,
  height: 150
}

let target = null
let setTarget = (targetObj) => {
  target = targetObj
}
let unit = 1000

let manager = null

let loadPlaneTerrain = (scene, target) => {
  manager = new ChunkManagers(params, scene, unit)
  let offset = {
    x: Math.floor(target.position.x / unit) * unit + unit * .5,
    y: Math.floor(target.position.z / unit) * unit + unit * .5
  }
  manager.getArround(offset)
}

let closeTerrain = () =>{
  manager.close()
  manager = null
  target = null
}

export default loadPlaneTerrain
export { setTarget , closeTerrain}