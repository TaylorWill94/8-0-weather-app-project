document.querySelector('#search-form')
.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = event.target.search.value;


fetch(`https://wttr.in/${userInput}?format=j1`)
.then((response) => response.json())
.then((forecast) => {
const display = document.querySelector('.display');
const area = forecast.nearest_area[0].areaName[0].value;
const region = forecast.nearest_area[0].region[0].value;
const country = forecast.nearest_area[0].country[0].value;
const currently = forecast.current_condition[0].FeelsLikeF;

display.innerHTML = `<h3>${area}</h3>
<p>Area: ${area}</p>
<p>Region: ${region}</p>
<p>Country: ${country}</p>
<p>Currently: Feels like ${currently}°F</p>`;

const li = document.createElement('li');
li.innerHTML = `<a href='#'>${userInput}_</a>${currently}°F`;
document.querySelector('ul').append(li);

li.addEventListener("click", (event) => {
    display.innerHTML = 
        `<h3>${area}</h3> 
        <p>Area: ${area}</p> 
        <p>Region: ${region}</p> 
        <p>Country: ${country}</p> 
        <p>Currently: Feels like ${currently}°F</p>`;

        const arr = ["Today", "Tomorrow", "Day After-Tomorrow"];
        for (let i = 0; i < arr.length; i++) {
          let avgTemp = forecast.weather[i].avgtempF;
          let maxTemp = forecast.weather[i].maxtempF;
          let minTemp = forecast.weather[i].mintempF;
          const div = document.querySelectorAll(".afterNext div");
          div[i].innerHTML = `<h2>${arr[i]}</h2>
                <p>Average Temperature:${avgTemp}</p>
                <p>Max Temperature: ${maxTemp}</p>
                <p>Min Temperature: ${minTemp}</p>`;
        }
      });


    const arr = ["Today", "Tomorrow", "Day After-Tomorrow"];

    for (let i = 0; i < arr.length; i++) {
        let avgTemp = forecast.weather[i].avgtempF;
        let maxTemp = forecast.weather[i].maxtempF;
        let minTemp = forecast.weather[i].mintempF;
        const div = document.querySelectorAll(".afterNext div");
        div[i].innerHTML = 
            `<h2>${arr[i]}</h2>
              <p>Average Temperature:${avgTemp}</p>
              <p>Max Temperature: ${maxTemp}</p>
              <p>Min Temperature: ${minTemp}</p>`;
              
            }
        })
        

    });

  