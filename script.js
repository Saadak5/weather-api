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

function presentWeather(data) {
    const tempDiv = document.getElementById('temp');
    const infoDiv = document.getElementById('info');
    const iconDiv = document.getElementById('icon');

    tempDiv.innerHTML = '';
    infoDiv.innerHTML = '';

    if (data.cod === '404') {
        infoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        
    }
}