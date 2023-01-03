const cityName = document.querySelector("#city-name");
const form = document.querySelector('form');
const innerData = document.querySelector('.inner-container')
const apiKey = '3ddfb97085547aca4ca310da88dcd24b'
const loading = document.querySelector('.loading')


form.addEventListener('submit', (e)=>{
e.preventDefault();
console.log(cityName.value)


const fetchWeather = async function(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`)
const responseJSON = await response.json();
return responseJSON;
}

const weatherData = fetchWeather();
weatherData.then((data)=>{
    loading.style.display='block'
    let html = ` <div class="city-container">
    <div class="city-name">${data.name},${data.sys.country}</div>
      <div class="weather-condition">${data.weather[0].main}</div>
</div>



<div class="temperature-container">
<div class="weather-icon"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image"></div>
<div class="temp">${(data.main.temp - 273.15).toFixed(2)}°C</div>
<div class="min-max">
    <div class="min">${(data.main.temp_min - 273.15).toFixed(2)} : 21°C</div>
    <div class="max">${(data.main.temp_max - 273.15).toFixed(2)} : 21°C</div>
</div>
</div>`
    
innerData.innerHTML = html;
loading.style.display='none'
   
})

loading.style.display = 'block'
// cityName.value = ''

})