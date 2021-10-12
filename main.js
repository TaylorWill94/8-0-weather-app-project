document.querySelector('.weather')
.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = event.target.weather;


fetch(`https://wttr.in/${userInput}?format=j1`)
.then((response) => response.json())
.then((weather) => {

        const cityInfo = weather.filter((forecast) => forecast.FeelsLikeF)
        //console.log(result);
        const displayArea = document.querySelector('.display')
        displayArea.textContent = cityInfo;
        //document.querySelector('#search aside').classList.add('success')
        document.querySelector('form.weather').reset();


})
})