// scripts.js
async function fetchWeatherData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=YOUR_API_KEY&units=metric');
    const data = await response.json();
    
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <p>Current Temperature: ${data.main.temp} °C</p>
        <p>Current Humidity: ${data.main.humidity}%</p>
        <p>Next Day's Forecast at 3:00 PM: ${data.main.temp_max} °C</p>
        <p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon">
    `;
    
    const highTempMessage = document.getElementById('high-temp-message');
    highTempMessage.innerHTML = `
        <p>High Temperature Today: ${data.main.temp_max} °C</p>
        <button onclick="closeMessage()">Close</button>
    `;
}

function closeMessage() {
    const highTempMessage = document.getElementById('high-temp-message');
    highTempMessage.style.display = 'none';
}

fetchWeatherData();
