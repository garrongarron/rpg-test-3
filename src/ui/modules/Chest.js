import cache from "./Cache"
import chestUrl from '../../images/cofres.png'

class Chest
{
    constructor(){
        this.chest = document.createElement('div')
        this.chest.innerText = "Let's do the first steps"
        this.chest.classList.add('ui-chest')
        console.log(chestUrl);
        this.chest.style.background = `url(${chestUrl}) -800px 0px`
    }
    setTitle(title){
        this.chest.innerText = title
    }
    start(){
        document.body.appendChild(this.chest)
        this.chest.classList.add('fadeIn1')
        this.chest.classList.remove('fadeOut1')
    }
    close(){
        setTimeout(() => {
            cache.appendChild(this.chest)
        }, 1000);
        this.chest.classList.remove('fadeIn1')
        this.chest.classList.add('fadeOut1')
    }
}

const chest = new Chest()

export default chest