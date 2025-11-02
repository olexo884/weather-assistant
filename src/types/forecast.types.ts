interface WeatherDotPayload {
  temperature: number;
  weatherIcon: string;
  windSpeed: number;
  time: string;
}

export interface CustomWeatherDotProps {
  cx?: number;
  cy?: number;
  payload?: WeatherDotPayload;
}
