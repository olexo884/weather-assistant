import axios from 'axios';
import type { APIWeatherCurrentData } from '../types/weather.types';

const API_URL = "http://localhost:3001/api/v1/weather"

export const fetchGet = async (reqQuery: string): Promise<APIWeatherCurrentData> => {
  const response = await axios.get(API_URL + reqQuery);
  return response.data;
};