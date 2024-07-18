const citiesApiHeaders = {
  "x-rapidapi-key": import.meta.env.CITIES_API_KEY,
  "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
};

// const citiesUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export interface CityData {
  id: number;
  wikiDataId: string;
  type: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number;
  longitude: number;
  population: number;
}

export async function fetchCities(cityName: string) {
  const response = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/places?types=CITY&namePrefix=${cityName}`,
    { headers: citiesApiHeaders },
  );
  const data = await response.json();
  return data as { data: CityData[] };
}
