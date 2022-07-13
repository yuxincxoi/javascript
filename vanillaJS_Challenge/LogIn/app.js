const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")
/* 아래처럼 표현 가능
const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")
*/

const greeting = document.querySelector("#greeting")

function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add("hidden")
    const username = loginInput.value
    localStorage.setItem("username", username)
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove("hidden")
}

const savedUsername = localStorage.getItem("username")

if(savedUsername === null) {
    loginForm.classList.remove("hidden")
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername)
}