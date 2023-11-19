function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apiCity = searchInputElement.value;
  let apiKey = `8t94954492f3aa97ffbbff3b440e4odd`;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${apiCity}&key=${apiKey}&unit=metric`;
  axios.get(apiURL).then(showTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let city = prompt("What is your city?");
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
if (weather[city]) {
  alert(
    `The temperature in ${city} is ${Math.round(
      weather[city].temp
    )}, and the humidty is ${Math.round(weather[city].humidity)}`
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/"
  );
}
