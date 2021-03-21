import cache from './Cache.js'
let volumeIcon = `<svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>
<path
    d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z">
</path>
</svg>`



class VolumeIcon {
    constructor() {
        this.subscribers = []
        let svg = document.createElement('div')
        svg.innerHTML = volumeIcon
        svg = svg.firstChild
        svg.classList.add('volume-icon')
        
        let svg2 = document.createElement('div')
        svg2.innerHTML = volumeIcon
        svg2 = svg2.firstChild
        svg2.classList.add('volume-icon')
        this.value = 100
        let volumeBar = document.createElement('input')
        volumeBar.setAttribute('type', 'range')
        volumeBar.style.background = `linear-gradient(90deg, #ff0000 100%, #00ff0000 0%)`
        let barContainer = document.createElement('div')
        barContainer.classList.add('volume-input')
        barContainer.appendChild(svg)
        barContainer.appendChild(volumeBar)
        barContainer.appendChild(svg2)
        this.volumeBar = barContainer


        let setValue = (val)=>{
            this.subscribers.map(callbacks =>{
                let value = val/100
                if(typeof callbacks == 'function') callbacks(value)
            })
            let string = val.toString()
            volumeBar.style.background = `linear-gradient(90deg, #ff0000 ${string}%, #00ff0000 0%)`
        }
        svg.addEventListener('click', ()=>{
            this.value-= (this.value<5)?0:5
            setValue(this.value)
        })

        svg2.addEventListener('click', ()=>{
            this.value += (this.value>95)?0:5
            setValue(this.value)
        })
    }
    subscribe(callback){
        this.subscribers.push(callback)
    }
    getVolume(){
        return this.value/100
    }
    start() {
        document.body.appendChild(this.volumeBar)
        this.volumeBar.classList.add('fadeIn1')
        this.volumeBar.classList.remove('fadeOut1')
    }
    close() {
        setTimeout(() => {
            cache.appendChild(this.volumeBar)
        }, 1000);
        this.volumeBar.classList.remove('fadeIn1')
        this.volumeBar.classList.add('fadeOut1')
    }
}
let volume = new VolumeIcon()

export default volume