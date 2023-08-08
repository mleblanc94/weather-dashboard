let input = document.querySelector("#user-input");


async function getWeather() {
    let apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ input.value +'&limit=5&appid=f51d61527316072dc7ef9316b5c61559';
       try {
     const response = await fetch(apiUrl);
     apiWeather = await response.json();
     resetErrorMessage();
     displayBox.style.display = 'flex';
     populateTemperature();
     atmosphere();
  } catch(error) {
    errorMessage.style.display = 'inline';
    input.style.marginTop = '7px';
    errorMessage.innerHTML = "Sorry, please enter a valid city name";
    displayBox.style.display = 'none';
        }
     }


submit.addEventListener('click', getWeather);