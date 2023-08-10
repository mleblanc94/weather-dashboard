let input = document.querySelector("#user-input");
let symbol1 = document.querySelector("#symbol1");
let symbol2 = document.querySelector("#symbol2");
let symbol3 = document.querySelector("#symbol3");
let symbol4 = document.querySelector("#symbol4");
let symbol5 = document.querySelector("#symbol5");
let symbol6 = document.querySelector("#symbol6");



async function getWeather() {
    let apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='+ input.value +'&limit=5&appid=f51d61527316072dc7ef9316b5c61559';
       try {
     const response = await fetch(apiUrl);
     apiWeather = await response.json();
     console.log(apiWeather)
     let latitude = apiWeather[0].lat;
     let longitude = apiWeather[0].lon;
     let weatherApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=f51d61527316072dc7ef9316b5c61559';
     try {
        const weatherResponse = await fetch(weatherApiUrl);
        let apiWeatherResponse = await weatherResponse.json();
        console.log(apiWeatherResponse);
        document.querySelector("#weather-area").style.display = "block";
        //Assigning weather values to the html elements based off the API response
        //Current Weather block
        document.querySelector("#location-span").innerHTML = apiWeatherResponse.city.name; 
        document.querySelector("#date-span").innerHTML = apiWeatherResponse.list[0].dt_txt.substring(0,10); 
        document.querySelector("#temp").innerHTML = apiWeatherResponse.list[0].main.temp; 
        document.querySelector("#wind").innerHTML = apiWeatherResponse.list[0].wind.speed;
        document.querySelector('#humidity').innerHTML = apiWeatherResponse.list[0].main.humidity;
        if (apiWeatherResponse.list[0].weather[0].description === "overcast clouds") {
         symbol1.innerHTML = "&#x2601"
        } else if (apiWeatherResponse.list[0].weather[0].description === "light rain") {
         symbol1.innerHTML = "&#x1F326"
        } else if (apiWeatherResponse.list[0].weather[0].description === "scattered clouds") {
         symbol1.innerHTML = "&#x26C5"
        } else if (apiWeatherResponse.list[0].weather[0].description === "few clouds") {
         symbol1.innerHTML = "&#x26C5";
        } else if (apiWeatherResponse.list[0].weather[0].description === "clear sky") {
         symbol1.innerHTML = "&#x263C";
        }
        //Next day forecast
        document.querySelector("#date-day1").innerHTML = apiWeatherResponse.list[8].dt_txt.substring(0,10);
        document.querySelector("#temp-day1").innerHTML = apiWeatherResponse.list[8].main.temp; 
        document.querySelector("#wind-day1").innerHTML = apiWeatherResponse.list[8].wind.speed;
        document.querySelector('#humidity-day1').innerHTML = apiWeatherResponse.list[8].main.humidity;
        //Day after forecast
        document.querySelector("#date-day2").innerHTML = apiWeatherResponse.list[16].dt_txt.substring(0,10);
        document.querySelector("#temp-day2").innerHTML = apiWeatherResponse.list[16].main.temp; 
        document.querySelector("#wind-day2").innerHTML = apiWeatherResponse.list[16].wind.speed;
        document.querySelector('#humidity-day2').innerHTML = apiWeatherResponse.list[16].main.humidity;
        //Day after forecast
        document.querySelector("#date-day3").innerHTML = apiWeatherResponse.list[24].dt_txt.substring(0,10);
        document.querySelector("#temp-day3").innerHTML = apiWeatherResponse.list[24].main.temp; 
        document.querySelector("#wind-day3").innerHTML = apiWeatherResponse.list[24].wind.speed;
        document.querySelector('#humidity-day3').innerHTML = apiWeatherResponse.list[24].main.humidity;

         //Day after forecast
         document.querySelector("#date-day4").innerHTML = apiWeatherResponse.list[32].dt_txt.substring(0,10);
         document.querySelector("#temp-day4").innerHTML = apiWeatherResponse.list[32].main.temp; 
        document.querySelector("#wind-day4").innerHTML = apiWeatherResponse.list[32].wind.speed;
        document.querySelector('#humidity-day4').innerHTML = apiWeatherResponse.list[32].main.humidity;

         //Day after forecast
         document.querySelector("#date-day5").innerHTML = apiWeatherResponse.list[39].dt_txt.substring(0,10);
         document.querySelector("#temp-day5").innerHTML = apiWeatherResponse.list[39].main.temp; 
        document.querySelector("#wind-day5").innerHTML = apiWeatherResponse.list[39].wind.speed;
        document.querySelector('#humidity-day5').innerHTML = apiWeatherResponse.list[39].main.humidity;


     } catch(error) {
        console.log(error);
     }
  } catch(error) {
    console.log(error)
        }
     }

submit.addEventListener('click', getWeather);