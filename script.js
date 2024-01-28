//tähän koodia
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
            presentWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching current weather data, try again please.');
        });

}