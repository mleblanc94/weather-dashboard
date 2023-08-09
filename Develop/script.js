let input = document.querySelector("#user-input");


async function getWeather() {
    let apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='+ input.value +'&limit=5&appid=f51d61527316072dc7ef9316b5c61559';
       try {
     const response = await fetch(apiUrl);
     apiWeather = await response.json();
     console.log(apiWeather)
     let latitude = apiWeather[0].lat;
     let longitude = apiWeather[0].lon;
     let weatherApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=f51d61527316072dc7ef9316b5c61559';
     try {
        const weatherResponse = await fetch(weatherApiUrl);
        let apiWeatherResponse = await weatherResponse.json();
        console.log(apiWeatherResponse);
        //Assigning weather values to the html elements based off the API response
        document.querySelector("#location-span").innerHTML = apiWeatherResponse.city.name; 
        document.querySelector("#date-span").innerHTML = apiWeatherResponse.list[0].dt_txt.substring(0,10); 
        document.querySelector("#temp").innerHTML = ((apiWeatherResponse.list[0].main.temp - 273.15) * 1.8 + 32); 
        console.log(apiWeatherResponse.list[0].main.temp)
     } catch(error) {
        console.log(error);
     }
  } catch(error) {
    console.log(error)
        }
     }

submit.addEventListener('click', getWeather);