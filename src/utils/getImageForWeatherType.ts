export function getImageForWeatherType(type: string) {
  return type in weatherTypeLookup
    ? weatherTypeLookup[type as keyof typeof weatherTypeLookup]
    : "/images/weather-clear.jpg";
}

const weatherTypeLookup = {
  Clear: "/images/weather-clear.jpg",
  Clouds: "/images/weather-cloudy.avif",
};
