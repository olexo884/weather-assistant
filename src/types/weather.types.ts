export interface WeatherCurrentData {
    location: string;
    temperature: number;
    condition: string;
    icon: string;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windDeg: number;
    visibility: number;
    timestamp: number;
    units: 'metric' | 'imperial';
}

export interface APIWeatherCurrentData {
    status: 'success' | 'error';
    data: WeatherCurrentData
}