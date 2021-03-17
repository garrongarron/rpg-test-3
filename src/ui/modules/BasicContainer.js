import cache from './Cache.js'

class BasicContainer{
    constructor(){
        this.container =  document.createElement('div')
        this.innerContainer =  document.createElement('div')

        this.background =  document.createElement('div')
        this.background.classList.add('background')
        this.container.appendChild(this.background)


        this.title =  document.createElement('div')
        this.title.classList.add('title')
        this.innerContainer.appendChild(this.title)

        this.message =  document.createElement('div')
        this.message.classList.add('message')
        this.innerContainer.appendChild(this.message)
        
        

        
        this.container.appendChild(this.innerContainer)

        this.okBtn =  document.createElement('div')
        this.okBtn.classList.add('ok-btn')
        this.okBtn.innerText = 'ok'
        this.innerContainer.appendChild(this.okBtn)

        this.container.classList.add('basic-container')
    }
    show(title, message, out){
        this.title.innerText = title
        this.message.innerText = message
        this.okBtn.innerText = out
        document.body.appendChild(this.container)
        this.container.classList.add('fadeIn1')
        this.container.classList.remove('fadeOut1')
    }
    hide(){
        this.container.classList.remove('fadeIn1')
        this.container.classList.add('fadeOut1')
        setTimeout(() => {
            cache.appendChild(this.container)
        }, 1000);
    }
}

let basicContainer = new BasicContainer()

export default basicContainer