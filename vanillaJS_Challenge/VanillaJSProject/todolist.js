const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list")

let toDos = []

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos))
    // const saveToDo = localStorage.getItem("toDo")
}

function deleteToDo(event) {
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(toDo) {
    const li = document.createElement("li")
    li.id = toDo.id
    const span = document.createElement("span")
    span.innerText = toDo.Text
    const button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", deleteToDo)

    li.appendChild(span)
    li.appendChild(button)

    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault()

    const toDo = toDoInput.value    
    toDoInput.value = ""
    const toDoObj = {
        Text: toDo ,
        id: Date.now()
    }
    toDos.push(toDoObj)
    paintToDo(toDoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item) {
    console.log("This is the turn of ", item)
}

const savedToDos = localStorage.getItem("toDos")

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}