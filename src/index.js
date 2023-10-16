function loadToUI(data) {
  const location = document.getElementById('location');
  const temp = document.querySelector('#temp');
  const condition = document.querySelector('.condition');
  const conditionText = condition.querySelector('.text');
  const conditionIcon = condition.querySelector('.conditionIcon');
  const dateDiv = document.getElementById('date');
  const feelslikeDiv = document.getElementById('feelslike');
  const humidity = document.getElementById('humidity');
  const pressure = document.getElementById('pressure');
  const wind = document.getElementById('wind');

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const [localtime] = data.location.localtime.split(' ');
  const date = new Date(localtime);
  const formattedDate = date.toLocaleDateString('en-US', options);
  dateDiv.textContent = `${formattedDate}`;
  location.textContent = `${data.location.name}, ${data.location.country}`;
  temp.textContent = `${Math.round(data.current.temp_c)}°C`;
  conditionText.textContent = `${data.current.condition.text}`;
  conditionIcon.setAttribute('src', data.current.condition.icon);
  feelslikeDiv.textContent = `feels like ${data.current.feelslike_c}°C`;
  humidity.textContent = data.current.humidity;
  pressure.textContent = data.current.pressure_mb;
  wind.textContent = data.current.wind_kph;
}

async function getWeatherData(city) {
  try {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7172fd1413bb4f5bb65123651231110&q=${city}`, { mode: 'cors' });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error.message);
    }
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
    const data = await response.json();
    loadToUI(data);
    return 0;
  } catch (error) {
    return error;
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const city = formData.get('city');
  getWeatherData(city);
});
