import axios from 'axios';
import type { APIWeatherCurrentData, APIWeatherForecastData } from '../types/weather.types';

const API_URL = "http://localhost:3001/api/v1/weather"

export const fetchGetCurrent = async (urlSuffix: string): Promise<APIWeatherCurrentData> => {
    const response = await axios.get(API_URL + urlSuffix);
    return response.data;
};

export const fetchGetForecast = async (urlSuffix: string): Promise<APIWeatherForecastData> => {
    const response = await axios.get(API_URL + urlSuffix);
    return response.data;
};