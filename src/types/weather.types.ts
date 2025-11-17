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

export interface WeatherForecastData {
    temp: number;
    windSpeed: number;
    timestamp: number;
    icon: string;
    units: 'metric' | 'imperial';
}

export interface APIWeatherForecastData {
    status: 'success' | 'error';
    data: {
        hourly: WeatherForecastData[];
    }
}