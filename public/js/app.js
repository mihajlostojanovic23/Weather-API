//  Informacije 
var cityName = document.getElementById('cityName')
var degrees = document.getElementById('stepeni')
var country = document.getElementById('zemlja')
var description = document.getElementById('description')
var humidity = document.getElementById('humidity')
var wind_speed = document.getElementById('speed')
var photo = document.getElementById('photo')

var delete_text = document.getElementById('delete')
var text = document.getElementById ('text-city')
var search = document.getElementById('search')
var city;
let weather = {
    "APIKey": "b99629191ec8dc5e9d9b4b4ca3c6959b",
    fetchWeather: function() {
           fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b99629191ec8dc5e9d9b4b4ca3c6959b')
           .then((response) => {
               if(response.ok) {
                   console.log('Succesfull')
               }
               else {
                   console.log("Not Success")
               }
             return  response.json() })
           .then((data) =>  {
              cityName.innerHTML = data.name + " " + data.sys.country;;
              wind_speed.innerHTML = "Wind speed: " + " " + data.wind.speed + " " + "km/h"
              humidity.innerHTML="Humidity:" + " " + data.main.humidity + "%"
              degrees.innerHTML= parseInt(data.main.temp - 273.15 )+ "°C"
              description.innerHTML = "Description:" + " " +  data.weather[0].description;
              photo.style.display='block'
              photo.setAttribute('src','https://openweathermap.org/img/wn/'+ data.weather[0].icon + '.png')
           })
           .catch((err) =>{
               alert('Error')
            })
        }

    }

window.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        ispitaj(city)
    }
})


 delete_text.onclick = () => {
     text.value="";
 }

search.onclick = () => {
    city= text.value;
    city.trim();
    ispitaj(city)
}

function ispitaj() {
    city= text.value;
    city.trim()
    if (text.value == "") {
        alert('Unesi grad')
    }
    
    else {
        weather.fetchWeather()
    }
}




 // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// CURRENT TIME

var current = document.getElementById('crnTime')

window.addEventListener('load', () => {
    time()
})

function time() {
    var vreme = new Date();
    var sati = vreme.getHours()
    var minuti = vreme.getMinutes()
    var sekunde = vreme.getSeconds()
    current.innerHTML="Current time: " + sati + ":" + minuti + ":" + sekunde
    setInterval(time,1000)
}

