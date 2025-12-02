import './styles/App.css'
import MainInfo from './components/main-info/MainInfo'
import Forecast from './components/forecast/Forecast'
import Chat from './components/chat/Chat'

import Loader from './components/loader/Loader'

import { useQuery } from '@tanstack/react-query';
import { fetchGetCurrent, fetchGetForecast } from './api/weatherApi';

import type { APIWeatherForecastData, APIWeatherCurrentData, WeatherCurrentData, WeatherForecastData } from './types/weather.types';

const App: React.FC = () => {

  const { data: dataCurrentWeather,
    isLoading: isLoadingCurrentWeather,
    isError: isErrorCurrentWeather } = useQuery<APIWeatherCurrentData, Error>({
      queryKey: ['currentWeather'],
      queryFn: () => fetchGetCurrent("/current"),
      staleTime: 1000 * 60,
    });

  const { data: dataForecastWeather,
    isLoading: isLoadingForecastWeather,
    isError: isErrorForecastWeather } = useQuery<APIWeatherForecastData, Error>({
      queryKey: ['forecastWeather'],
      queryFn: () => fetchGetForecast("/forecast"),
      staleTime: 1000 * 60 * 60 * 12,
    });

  const currentWeatherData: WeatherCurrentData | undefined = dataCurrentWeather?.data;
  const forecastWeatherData: WeatherForecastData[] | undefined = dataForecastWeather?.data?.hourly;

  return (
    <>
      <main className='main'>
        <article className='content'>
          <section className='left-widgets'>
            {//isLoadingCurrentWeather ? <Loader /> :
              <MainInfo />
            }
            {isLoadingForecastWeather ? <Loader /> :
              <Forecast forecastItems={forecastWeatherData} />
            }
          </section>
          <section className='right-widgets'>
            <Chat />
          </section>
        </article>
      </main>
    </>
  )
}

export default App
