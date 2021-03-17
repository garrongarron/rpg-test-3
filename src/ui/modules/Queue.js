import cache from './Cache.js'

class QueueElement{
    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add('element')

        this.message = document.createElement('div')
        this.message.classList.add('messsage')
        this.container.appendChild(this.message)

        this.okBtn = document.createElement('div')
        this.okBtn.classList.add('ok-btn')
        this.okBtn.innerText = "Q"
        this.container.appendChild(this.okBtn)
    }
    setMessage(message, btn){
        this.message.innerText = message
        this.okBtn.innerText = btn
        this.container.classList.add('fadeIn1')
        this.container.classList.remove('fadeOut1')
        setTimeout(() => {
            this.container.classList.remove('fadeIn1')
            this.container.classList.add('fadeOut1')
            setTimeout(() => {
                cache.appendChild(this.container)
            }, 1000);
        }, 15*1000);
    }
    getElement(){
        return this.container
    }
}
class Queue{
    constructor(){
        this.list = []
        this.container = document.createElement('div')
        this.container.classList.add('queue-container')
        document.body.appendChild(this.container)
        for (let index = 0; index < 5; index++) {
            this.list.push(this.getOne())
        }
    }
    getOne(){
        let element = new QueueElement()
        return element
    }
    triggerMessage(message, btn){
        console.log('ok2');
        let element = this.list.pop()
        element.setMessage(message, btn)
        this.list.unshift(element)
        // this.container.appendChild(element.getElement())
        this.container.insertBefore(element.getElement(), this.container.firstChild);
    }
}

let queue = new Queue()

export default queue