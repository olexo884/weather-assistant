import type { WeatherForecastData } from "./weather.types";

export interface CustomWeatherDotProps {
  cx?: number;
  cy?: number;
  payload?: WeatherForecastData;
}

export interface ForecastProps {
    forecastItems?: WeatherForecastData[]; 
}