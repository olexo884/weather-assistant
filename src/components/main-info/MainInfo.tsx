import React, { useMemo } from 'react';

import styles from "../../styles/main-info__styles/MainInfo.module.css";

import type { MainInfoProps } from "../../types/mainInfo.types"
import { WeatherDayMap, WeatherIconMap, WeatherMonthMap } from '../../types/weatherMap.types';
import MainWeather from './main-weather/MainWeather';
import MainWeatherWidgets from './main-weatherWidgets/MainWeatherWidgets';

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
        <article className={styles.main}>
            <MainWeather />
            <MainWeatherWidgets/>
        </article>
    )
}


export default MainInfo