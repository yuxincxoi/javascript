const guess = document.querySelector("#guess")
const range = document.querySelector("#range")
const choose = document.querySelector("#choose")
const button = document.querySelector("#btn")
const whch = document.querySelector("#whch")
const result = document.querySelector("#result")


function casino(event) {

    const rangeValue = range.value
    const chooseValue = choose.value
    const randomValue = Math.ceil(Math.random()*rangeValue)

    event.preventDefault()
   
    if(rangeValue < 0) {
        console.log("범위에는 음수가 포함될 수 없습니다.")
    }

    if(chooseValue == "") {
        console.log("숫자를 선택한 후에 게임을 시작할 수 있습니다.")
    }

    whch.innerText = `You choose: ${chooseValue}, the machine choose: ${randomValue}.`

    if(chooseValue == randomValue){
        result.innerText = 'You won!'
    } else{
        result.innerText = 'You lost!'
    }
}

button.addEventListener("click", casino)