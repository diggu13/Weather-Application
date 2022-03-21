const inputValue = document.querySelector('.input-value');
const button = document.querySelector('.submit')
const weatherDetails = document.querySelector('.weather-details')


/* Event listeners */

button.addEventListener('click',getWeather);


/* Functions */
function getWeather(e){
    e.preventDefault();
    // search term
    const search = inputValue.value;
    if(search==''){
        alert('Enter inputs')
    }
    else{
        fetch(`https://api.weatherapi.com/v1/current.json?key=17bb5aa9896f496f83891245221703&q=${search}&aqi=noa`).then(res => res.json())
        .then(data => {
            renderDom(data)
        })
    }
}

// Render to DOM
function renderDom(item){
    weatherDetails.innerHTML = `
        <div class="city-name_weather-img">
            <h2>${item.location.name}</h2>
            <h2>${item.current.condition.text}</h2>
            <img src="${item.current.condition.icon}"/>
        </div>
        <div class="weather-info">
            <div>
                <h3>Tepmperature</h3>
                <h3>${item.current.temp_c} ℃</h3>
            </div>
            <div>
                <h3>Wind (km/h)</h3>
                <h3>${item.current.wind_kph}</h3>
            </div>
            <div>
                <h3>Humidity</h3>
                <h3>${item.current.humidity}</h3>
            </div>
            <div>
                <h3>Feels Like</h3>
                <h3>${item.current.feelslike_c} ℃</h3>
            </div>
        </div>
    `
}