// Function to get weather data
function getWeather() {
    const apiKey = 'ffd8aedc95ef5a1f2e2d5391cce6cdde';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Note: Enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Save the weather data to localStorage
            localStorage.setItem('weatherData', JSON.stringify(data));

            // Call the function to present weather
            presentWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching current weather data, try again please.');
        });
}

// Function to present weather
function presentWeather(data) {
    const tempDiv = document.getElementById('temp');
    const infoDiv = document.getElementById('info');
    const iconDiv = document.getElementById('icon');

    tempDiv.innerHTML = '';
    infoDiv.innerHTML = '';

    if (data.cod === '404') {
        infoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const desc = data.weather[0].description;
        const iconId = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconId}@4x.png`;

        // Save additional weather data to localStorage
        localStorage.setItem('cityName', cityName);
        localStorage.setItem('temperature', temperature);
        localStorage.setItem('description', desc);
        localStorage.setItem('iconUrl', iconUrl);

        const temperatureHTML = `<p>${temperature}°C</p>`;
        const weatherHTML = `<p>${cityName}</p><p>${desc}</p>`;

        tempDiv.innerHTML = temperatureHTML;
        infoDiv.innerHTML = weatherHTML;
        iconDiv.src = iconUrl;

        showIcon();
    }
}

// Function to show icon
function showIcon() {
    const iconDiv = document.getElementById('icon');
    iconDiv.style.display = 'block';
}

// Event listener for a button click (assuming you have a button with id 'getWeatherButton')
document.getElementById('getWeatherButton').addEventListener('click', getWeather);
