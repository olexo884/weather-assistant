import './styles/App.css'
import Widgets from './components/widgets/Widgets'
import MainInfo from './components/main-info/MainInfo'
import Forecast from './components/forecast/Forecast'

import Loader from './components/loader/Loader'

import { useQuery } from '@tanstack/react-query';
import { fetchGet } from './api/weatherApi';

import type { APIWeatherCurrentData, WeatherCurrentData } from './types/weather.types';

const App: React.FC = () => {

  const { data: dataCurrentWeather,
    isLoading: isLoadingCurrentWeather,
    isError: isErrorCurrentWeather } = useQuery<APIWeatherCurrentData, Error>({
      queryKey: ['currentWeather'],
      queryFn: () => fetchGet("/current"),
      staleTime: 1000 * 60,
    });

  const currentWeatherData: WeatherCurrentData | undefined = dataCurrentWeather?.data;

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
          <Forecast />
        </section>
        <section className='lower-widgets'>
          <Widgets />
          <div>face</div>
          <div>chat</div>
        </section>
      </main>
    </>
  )
}

export default App
