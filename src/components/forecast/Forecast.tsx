import React from 'react';
import {
    LineChart,
    Line
} from 'recharts';

import styles from "../../styles/forecast__styles/Forecast.module.css";
import TimeIcon from '../../assets/icon/forecast-icon/time.svg';
import ClearSkyIcon from '../../assets/icon/weather/01d.svg';

import CustomWeatherDot from './CustomWeatherDot'

const Forecast: React.FC = () => {

    let weatherData = [];

    for (let i = 0; i < 12; i++) {
        weatherData.push({
            time: String(i).padStart(2, '0') + ':00',
            temperature: 26 - i,
            windSpeed: 11.7,
            weatherIcon: ClearSkyIcon
        })
    }


    return (
        <article className={styles.forecast}>
            <div className={styles.forecastHeader}>
                <img src={TimeIcon} alt="time" />
                <h3>12-hour forecast</h3>
            </div>
            <div className={styles.graph}>
                <LineChart className={styles.chart}
                    style={{ width: '100%', height: '100%', maxHeight: '250px' }}
                    responsive
                    data={weatherData}
                    margin={{
                        top: 30,
                        right: 20,
                        left: 20,
                        bottom: 30,
                    }}
                >
                    
                    <Line type="monotone" dataKey="temperature" stroke="#ffffffff" strokeWidth={2} activeDot={{ r: 5 }} dot={<CustomWeatherDot />} />
                </LineChart>
            </div>
        </article>
    )
}


export default Forecast