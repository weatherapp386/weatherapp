document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '2e5ab3b0c4a641289e373224251703'; // Replace with your own API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found');
                return;
            }

            const cityName = data.location.name;
            const temperature = `${data.current.temp_c}°C`;
            const condition = data.current.condition.text;
            const aqi = `AQI: ${data.current.air_quality.pm2_5}`;

            // Display data
            document.getElementById('city-name').textContent = `Weather in ${cityName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
            document.getElementById('condition').textContent = `Condition: ${condition}`;
            document.getElementById('aqi').textContent = aqi;
        })
        .catch(error => {
            alert('Error fetching weather data');
            console.error(error);
        });
}
