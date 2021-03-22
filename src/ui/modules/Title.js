import cache from "./Cache.js"


class Title
{
    constructor(){
        this.title = document.createElement('div')
        this.title.innerText = "Let's do the first steps"
        this.title.classList.add('ui-title')
    }
    setTitle(title){
        this.title.innerText = title
    }
    start(){
        document.body.appendChild(this.title)
        this.title.classList.add('fadeIn1')
        this.title.classList.remove('fadeOut1')
    }
    close(){
        setTimeout(() => {
            cache.appendChild(this.title)
        }, 1000);
        this.title.classList.remove('fadeIn1')
        this.title.classList.add('fadeOut1')
    }
}

const title = new Title()

export default title