function currentcity(event) {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  event.preventDefault();
  let submitcity = document.querySelector("#findweather");
  let day = days[now.getDay()];
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${day}, at ${hours}:${minutes} in ${submitcity.value}`;
}

let submitForm = document.querySelector("#city-form");
submitForm.addEventListener("submit", currentcity);
