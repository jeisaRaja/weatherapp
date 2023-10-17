export function setLocation(city) {
  localStorage.setItem('city', city);
}

export function getLocation() {
  const city = localStorage.getItem('city') || 'Jakarta';
  return city;
}
