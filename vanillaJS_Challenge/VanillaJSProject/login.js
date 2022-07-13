const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const button = document.querySelector("button")

const hi = document.querySelector("#hi")



function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add("hidden")
    const username = loginInput.value
    localStorage.setItem("username", username)
    paintHi(username)
}

function paintHi(username) {
    hi.innerText = `Hello ${username} !`
    hi.classList.remove("hidden")
}

const savedUsername = localStorage.getItem("username")

if(savedUsername === null) {
    loginForm.classList.remove("hidden")
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintHi(savedUsername)
}