import './styles/App.css'
import MainInfo from './components/main-info/MainInfo'
import Forecast from './components/forecast/Forecast'
import Chat from './components/chat/Chat'

import Loader from './components/loader/Loader'

import { useQuery } from '@tanstack/react-query';
import { fetchGetCurrent, fetchGetForecast } from './api/weatherApi';

import type { APIWeatherCurrentData, WeatherCurrentData } from './types/weather.types';
import type { APIWeatherForecastData, WeatherForecastData } from './types/forecast.types';
import type { APIGetData, MessagesData } from './types/chat.types'
import { fetchGetMessages } from './api/chatApi'

const App: React.FC = () => {

  const { data: dataCurrentWeather,
    isLoading: isLoadingCurrentWeather,
    isError: isErrorCurrentWeather,
    error: errorCurrent } = useQuery<APIWeatherCurrentData, Error>({
      queryKey: ['currentWeather'],
      queryFn: () => fetchGetCurrent("/current"),
      staleTime: 1000 * 60 * 30,
    });

  const { data: dataForecastWeather,
    isLoading: isLoadingForecastWeather,
    isError: isErrorForecastWeather,
    error: errorForecast } = useQuery<APIWeatherForecastData, Error>({
      queryKey: ['forecastWeather'],
      queryFn: () => fetchGetForecast("/forecast"),
      staleTime: 1000 * 60 * 60,
    });


  const { data: dataMessages,
    isLoading: isLoadingMessages,
    isError: isErrorMessages,
    error: errorMessages } = useQuery<APIGetData, Error>({
      queryKey: ['messages'],
      queryFn: () => fetchGetMessages("/history")
    });

  const currentWeatherData: WeatherCurrentData | undefined = dataCurrentWeather?.data;
  const forecastWeatherData: WeatherForecastData[] | undefined = dataForecastWeather?.data?.hourly;

  return (
    <>
      <main className='main'>
        <article className='content'>
          <section className='left-widgets'>
            {isLoadingCurrentWeather ? <Loader /> :
              currentWeatherData
              && < MainInfo {...currentWeatherData} />
            }
            {isErrorCurrentWeather && <p>{errorCurrent.message}</p>}
            {isLoadingForecastWeather ? <Loader /> :
              forecastWeatherData
              && <Forecast forecastItems={forecastWeatherData} />
            }
            {isErrorForecastWeather && <p>{errorForecast.message}</p>}
          </section>
          <section className='right-widgets'>
            {isLoadingMessages ? <Loader /> :
              dataMessages
              && <Chat messages={dataMessages.data.messages} nextCursor={dataMessages.nextCursor} />
            }
            {isErrorMessages && <p>{errorMessages.message}</p>}
          </section>
        </article>
      </main>
    </>
  )
}

export default App
