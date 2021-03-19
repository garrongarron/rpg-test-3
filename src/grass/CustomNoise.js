import noise from './NoiseMaker.js'

let params = {
    noiseType: 'perlin',
    // scale: 50,
    scale: 0.00001,
    octaves: 3,
    persistence: .9,
    lacunarity: 2.9,
    exponentiation: 2.8,
    seed: 2,
    height: 1
}
let gen = new noise.Noise(params)

let getCustomNoise = ()=>{
    return gen
}
export default getCustomNoise