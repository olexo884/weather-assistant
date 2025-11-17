import React, { useMemo } from 'react';

import styles from "../../styles/main-info__styles/MainInfo.module.css";
import ArrowIcon from '../../assets/icon/mainInfo-icon/arrow.svg';
import MarkerIcon from '../../assets/icon/mainInfo-icon/marker.svg';

import type { MainInfoProps } from "../../types/mainInfo.types"
import { WeatherDayMap, WeatherIconMap, WeatherMonthMap } from '../../types/weatherMap.types';

const MainInfo: React.FC<MainInfoProps> = ({
    temperature,
    exactDate,
    weatherConditions,
    location,
    weatherIconCode,
    units }
) => {

    const formattedDateTime = useMemo(() => {
        if (!exactDate) return null;
        return new Date(exactDate * 1000);
    }, [exactDate]);

    return (
        <article className={styles.info}>
            <div className={styles.MainInfo}>
                <div className={styles.infoHeader}>
                    <img src={MarkerIcon} alt="marker" />
                    <p>{location}</p>
                    <img src={ArrowIcon} alt="arrow" />
                </div>
                <h3>{weatherConditions}</h3>
                <h1>{temperature}{units === 'metric' ? "°C" : "°F"}</h1>
                <p> {formattedDateTime && WeatherDayMap[formattedDateTime.getDay()]} | {formattedDateTime && formattedDateTime.getDate()} {formattedDateTime && WeatherMonthMap[formattedDateTime.getMonth()]} {formattedDateTime && formattedDateTime.getFullYear()}</p>
            </div>
            <img src={weatherIconCode && WeatherIconMap[weatherIconCode.slice(0, 2)]} alt={weatherConditions} />
        </article>
    )
}


export default MainInfo