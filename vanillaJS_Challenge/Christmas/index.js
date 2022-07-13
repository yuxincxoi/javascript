const clockTitle = document.querySelector(".js-clock");

function ddayClock(){
    const now = new Date()
    const christmas = new Date(2022, 12, 25)
    const dday = (christmas.getTime()-now.getTime()) / 1000  // getTime() => ms로 표현
    const day = Math.floor(dday / 86400)
    const hours = String(Math.floor(dday % 86400 / 3600)).padStart(2, "0")
    const minutes = String(Math.floor(dday % 86400 % 3600 / 60)).padStart(2, "0")
    const seconds = String(Math.floor(dday % 86400 % 3600 % 60)).padStart(2, "0")

    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`
}

ddayClock()
setInterval(ddayClock, 1000)
