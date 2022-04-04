const API_KEY = "6b181c6f95e703e750e3ee86cd893687";

function onGeoO(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}
function onGeoError() { 
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoO, onGeoError);