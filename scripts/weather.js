
const apiKey = 'a98535084e6aa109ae5bfc0a494f74d7'; // Replace with your actual API key

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=5.63&lon=0.19&appid=a98535084e6aa109ae5bfc0a494f74d7&units=imperial`;
const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=5.63&lon=0.19&appid=a98535084e6aa109ae5bfc0a494f74d7&units=imperial`;

async function getWeatherData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

async function displayCurrentWeather() {
    try {
        const data = await getWeatherData(currentWeatherURL);
        document.getElementById('current-temp').textContent = data.main.temp.toFixed(1);
        document.getElementById('current-humidity').textContent = data.main.humidity;
        document.getElementById('current-main').textContent = data.weather[0].main;
        document.getElementById('current-description').textContent = data.weather[0].description;
        document.getElementById('current-icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.getElementById('current-icon').alt = data.weather[0].description;
    } catch (error) {
        console.error('Error fetching current weather data:', error);
    }
}

async function displayForecastWeather() {
    try {
        const data = await getWeatherData(forecastWeatherURL);
        const nextDayForecast = data.list.find(item => new Date(item.dt_txt).getHours() === 15);
        document.getElementById('forecast-temp').textContent = nextDayForecast.main.temp.toFixed(1);
        document.getElementById('forecast-main').textContent = nextDayForecast.weather[0].main;
        document.getElementById('forecast-description').textContent = nextDayForecast.weather[0].description;
        document.getElementById('forecast-icon').src = `https://openweathermap.org/img/w/${nextDayForecast.weather[0].icon}.png`;
        document.getElementById('forecast-icon').alt = nextDayForecast.weather[0].description;
    } catch (error) {
        console.error('Error fetching forecast weather data:', error);
    }
}

displayCurrentWeather();
displayForecastWeather();
