const body = document.querySelector("body")
const imgs = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg" ]
const randomImage = `url('${imgs[Math.floor(Math.random()*imgs.length)]}')`
    
body.style.backgroundImage = randomImage