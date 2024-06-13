type Astro = {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    is_moon_up: number
    is_sun_up: number
}

type Hour = {
    time: string
    temp_c: number
    is_day: number
    condition: Condition
    wind_kph: number
    humidity: number
    chance_of_rain: number

}

type Day = {
    maxtemp_c: number
    mintemp_c: number
    condition: Condition
}

type Forecastday = {
    day: Day
    astro: Astro
    date: string
    hour: Hour[]
}

type Forecast = {
    forecastday: Forecastday[]
}

type Condition = {
    text: string
    code: number
}

interface AirQuality {
    "us-epa-index": number;
}

type Current = {
    temp_c: number
    condition: Condition
    pressure_mb: number
    humidity: number
    feelslike_c: number
    wind_kph: number
    uv: number
    dewpoint_c: number
    gust_kph: number
    air_quality: AirQuality
    is_day: number
    precip_mm: number
    last_updated: string
}

type Place = {
    name: string
    region: number
    localtime: string
    lat: number
    lon: number
}

type WeatherProps = {
    location: Place
    current: Current
    forecast: Forecast
}