import './styles/App.css'
import Widgets from './components/widgets/Widgets'
import MainInfo from './components/main-info/MainInfo'
import Forecast from './components/forecast/Forecast'

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
      <main className='Main'>
        <section className='upper-widgets'>
          {isLoadingCurrentWeather ? <Loader /> :
            <MainInfo
              temperature={currentWeatherData?.temperature}
              exactDate={currentWeatherData?.timestamp}
              weatherConditions={currentWeatherData?.condition}
              location={currentWeatherData?.location}
              weatherIconCode={currentWeatherData?.icon}
              units={currentWeatherData?.units}
            />
          }
          {isLoadingForecastWeather ? <Loader /> :
            <Forecast forecastItems={forecastWeatherData} />}
        </section>
        <section className='lower-widgets'>
          {isLoadingCurrentWeather ? <Loader /> :
            <Widgets
              humidity={currentWeatherData?.humidity}
              pressure={currentWeatherData?.pressure}
              windDeg={currentWeatherData?.windDeg}
              windSpeed={currentWeatherData?.windSpeed}
              visibility={currentWeatherData?.visibility}
              units={currentWeatherData?.units}
            />}
          <div>face</div>
          <div>chat</div>
        </section>
      </main>
    </>
  )
}

export default App
