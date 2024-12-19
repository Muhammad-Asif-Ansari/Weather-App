// // console.log("test");

// var weather = document.getElementById("weather");
// var city = document.getElementById("city");

// function getWeather() {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=a86c0fb3172a3ea2f332e960d498cd35&units=metric`
//   )
//     .then(function (data) {
//       return data.json();
//     })
//     .then(function (data) {
//       console.log(data);


//       console.log(data.weather[0].main);
//       // console.log(data.weather[0].des);

//       const weatherCondition = data.weather[0].main.toLowerCase();
//       // console.log(weatherCondition);
//       const weatherImages = {
//         clear: "Images/clear.jpeg",
//         clouds: "Images/cloudy.webp",
//         snow: "Images/snowy.webp",
//         thunderstorm: "Images/thunder.jpeg",
//         drizzle: "Images/drizzle.jpeg",
//         haze: "Images/haze.jpg",
//         mist: "Images/mist.jpeg",
//         default: "Images/weather.jpeg",
//       };

//       const weatherImage = weatherImages[weatherCondition] || weatherImages.default;


//       weather.innerHTML = `
//     <h1 class="temp">${Math.round(data.main.temp)}°C</h1>
//     <p>${data.name}</p>
//     <img src="${weatherImage}" alt="Weather Image" class="weather-image">
//     <p>${data.weather[0].main}</p>
//     <p>${data.wind.speed} km/h</p>
//     <p>${data.main.humidity}%</p>
//     `;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// function pressKey(event) {
//   if (event.key === "Enter") {
//     getWeather();

//   }
// }


// // getWeather()


var weather = document.getElementById("weather");
var city = document.getElementById("city");

function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=a86c0fb3172a3ea2f332e960d498cd35&units=metric`
  )
    .then(function (data) {
      if (!data.ok) {
        throw new Error("Invalid City Name. Please try again.");
      }
      return data.json();
    })
    .then(function (data) {
      const weatherCondition = data.weather[0].main.toLowerCase();
      const weatherImages = {
        clear: "Images/clear.jpeg",
        clouds: "Images/cloudy.webp",
        snow: "Images/snowy.webp",
        thunderstorm: "Images/thunder.jpeg",
        drizzle: "Images/drizzle.jpeg",
        haze: "Images/haze.jpg",
        mist: "Images/mist.jpeg",
        default: "Images/weather.jpeg",
      };

      const weatherImage = weatherImages[weatherCondition] || weatherImages.default;

      weather.innerHTML = `
        <h1 class="temp">${Math.round(data.main.temp)}°C</h1>
        <p>${data.name}</p>
        <img src="${weatherImage}" alt="Weather Image" class="weather-image">
        <p>${data.weather[0].main}</p>
        <p>${data.wind.speed} km/h</p>
        <p>${data.main.humidity}%</p>
      `;
    })
    .catch(function (err) {
      weather.innerHTML = `
        <p style="color: red; font-weight: bold;">${err.message}</p>
      `;
    });
}

function pressKey(event) {
  if (event.key === "Enter") {
    getWeather();
  }
}
