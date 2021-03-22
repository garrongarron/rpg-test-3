
import discordUrl from '../../images/Discord-logo.png'
let discord = document.createElement('div')
discord.classList.add('discord')
discord.style.background = `url(${discordUrl})`
discord.style.backgroundSize = 'cover'
discord.addEventListener('click',()=>{
    window.open('https://discord.gg/thzfr37x', '_blank');
})
document.body.appendChild(discord)
console.log('discord loaded');