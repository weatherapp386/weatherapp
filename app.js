document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '2e5ab3b0c4a641289e373224251703'; // Replace with your own API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=yes`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                alert('City not found');
                return;
            }

            document.getElementById('city-name').textContent = `Weather in ${data.location.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById('condition').textContent = `Condition: ${data.current.condition.text}`;
            document.getElementById('aqi').textContent = `AQI: ${data.current.air_quality?.pm2_5 ?? 'N/A'}`;
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again later.');
            console.error('Fetch error:', error);
        });
}