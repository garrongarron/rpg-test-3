import cache from "./Cache"


class Chest
{
    constructor(){
        this.chest = document.createElement('div')
        this.chest.innerText = "Let's do the first steps"
        this.chest.classList.add('ui-chest')
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