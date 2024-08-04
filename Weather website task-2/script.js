const inputBox= document.querySelector('.input-box');
const searchBtn= document.getElementById('searchBtn');
const weather= document.querySelector('.weather-condition')


const temperature= document.querySelector('.temp');
const description= document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed =document.getElementById('windspeed');
const locationNotfound = document.querySelector('.location-notfound');

async function checkWeather(city){
const api_key="1a53265eea2625e7a12d00896dd22a3a";
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; 

const weather_data=  await fetch(`${url}`).then(response => response.json());

if(weather_data.cod===`404`){
  locationNotfound.style.display="flex";
  weather.style.display="none";
    return;  
}
locationNotfound.style.display="none";
 weather.style.display="flex";

temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
description.innerHTML=`${weather_data.weather[0].description}`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
windspeed.innerHTML=`${weather_data.wind.speed}km/h`;


}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
   
});