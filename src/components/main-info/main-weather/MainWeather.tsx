import React from 'react';

import LocationIcon from '../../../assets/icon/mainInfo-icon/location.svg';

import styles from "../../../styles/main-info__styles/MainWeather.module.css";
import { WeatherDayMap, WeatherIconMap, WeatherMonthMap } from '../../../types/weatherMap.types';

const MainWeather: React.FC = () => {
    const weatherIconCode = "01";
    const weatherConditions = "overcast clouds";
    const temperature = 26;
    const units = "metric";
    const formattedDateTime = new Date();
    const location = "Vinnytsia, UA";

    const timeString = formattedDateTime.toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return (
        <article className={styles.main}>
            <img className={styles.weatherIcon} src={weatherIconCode && WeatherIconMap[weatherIconCode.slice(0, 2)]} alt={weatherConditions} />
            <div>
                <div className={styles.header}>
                    <h1>{temperature > 0 ? "+" + temperature : temperature}{units === 'metric' ? "°C" : "°F"}</h1>
                    <h3>{weatherConditions.toUpperCase()}</h3>
                </div>
                <hr />
                <div className={styles.bottomInfo}>
                    <div className={styles.location}>
                        <img src={LocationIcon} alt="loaction icon" />
                        <p>{location}</p>
                    </div>
                    <div className={styles.date}>
                        {formattedDateTime && (
                            <div>
                                <p>
                                    {WeatherDayMap[formattedDateTime.getDay()]} | {formattedDateTime.getDate()} {WeatherMonthMap[formattedDateTime.getMonth()]} {formattedDateTime.getFullYear()}
                                </p>
                                <h3>{timeString}</h3>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}


export default MainWeather