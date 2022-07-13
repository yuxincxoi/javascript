const APIKEY = config.apikey

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector(".weather span:first-child")
            const weather = document.querySelector(".weather span:last-child")
            city.innerText = data.name
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)