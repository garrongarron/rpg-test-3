import basicContainer from './modules/BasicContainer.js'

import queue from './modules/Queue.js' 
import SlideBar from './modules/SlideBar.js'

let slideBar = new SlideBar()

let start = () =>{

    slideBar.show()
    slideBar.get().classList.add('gold')
    slideBar.getBar().style.background = 'linear-gradient(90deg, #fbff00 25%, #ffc0cb00 0%)'
    slideBar.setLabel('25/100')
    

    
    // setTimeout(() => {
    //     queue.triggerMessage('Enjoy!', "3")
    // }, 1000);
    
    // setTimeout(() => {
    //     queue.triggerMessage('How are you?', "2")
    // }, 2000);
    // setTimeout(() => {
    //     queue.triggerMessage('Hello!', "1")
    // }, 3000);
    
}
export default start


