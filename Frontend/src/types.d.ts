type Day = {
    maxtemp_c: number
    mintemp_c: number
}

type Forecastday = {
    day: Day
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