document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }
    getWeather(city);
});

async function getWeather(city) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = "Loading...";

    try {
        let response = await fetch(`https://wttr.in/${city}?format=j1`);
        let data = await response.json();

        weatherInfo.innerHTML = `
            <h2>${city}</h2>
            <p><strong>Temperature:</strong> ${data.current_condition[0].temp_C} °C</p>
            <p><strong>Weather:</strong> ${data.current_condition[0].weatherDesc[0].value}</p>
            <p><strong>Humidity:</strong> ${data.current_condition[0].humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.current_condition[0].windspeedKmph} km/h</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = "Error fetching weather!";
    }
}
