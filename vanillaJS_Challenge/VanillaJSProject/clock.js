const clock = document.querySelector(".clock")

const date = new Date()
const time = date.getTime() / 1000
const MthFlrHOUR = Math.floor(time % 86400 / 3600)
let hours = String(MthFlrHOUR).padStart(2,"0")
const minutes = String(Math.floor(time % 86400 % 3600 / 60)).padStart(2,"0")
const seconds = String(Math.floor(time % 86400 % 3600 % 60)).padStart(2,"0")



if(hours >= 13) {
    hours = String(MthFlrHOUR - 12).padStart(2,"0")
    clock.innerText = `PM ${hours}:${minutes}:${seconds}`
} else if(hours <= 11) {
    clock.innerText = `AM ${hours}:${minutes}:${seconds}`
} else {
    clock.innerText = `PM ${hours}:${minutes}:${seconds}`
}