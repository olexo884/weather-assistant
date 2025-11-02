import './styles/App.css'
import Widgets from './components/widgets/Widgets'
import MainInfo from './components/main-info/MainInfo'
import Forecast from './components/forecast/Forecast'

const App: React.FC = () => {
  

  return (
    <>
      <main className='Main'>
        <section className='upper-widgets'>
          <MainInfo
            temperature="26°C"
            exactDate="Sunday | 12 Dec 2024"
            weatherConditions="Broken clouds"
            location="New York"
            weatherIconCode="04d"
          />
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
