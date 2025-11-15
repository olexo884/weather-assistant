import React, { useMemo } from 'react';

import styles from "../../styles/main-info__styles/MainInfo.module.css";
import ArrowIcon from '../../assets/icon/mainInfo-icon/arrow.svg';
import MarkerIcon from '../../assets/icon/mainInfo-icon/marker.svg';

import ClearSkyIcon from '../../assets/icon/weather/01d.svg';
import FewCloudsIcon from '../../assets/icon/weather/02d.svg';
import ScatteredCloudsIcon from '../../assets/icon/weather/03d.svg';
import BrokenCloudsIcon from '../../assets/icon/weather/04d.svg';
import ShowerRainIcon from '../../assets/icon/weather/09d.svg';
import RainIcon from '../../assets/icon/weather/10d.svg';
import ThunderstormIcon from '../../assets/icon/weather/11d.svg';
import SnowIcon from '../../assets/icon/weather/13d.svg';
import MistIcon from '../../assets/icon/weather/50d.svg';

import type { MainInfoProps } from "../../types/mainInfo.types"

const WeatherIconMap: Record<string, string> = {
    '01': ClearSkyIcon,
    '02': FewCloudsIcon,
    '03': ScatteredCloudsIcon,
    '04': BrokenCloudsIcon,
    '09': ShowerRainIcon,
    '10': RainIcon,
    '11': ThunderstormIcon,
    '13': SnowIcon,
    '50': MistIcon,
}

const WeatherDayMap: Record<number, string> = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

const WeatherMonthMap: Record<number, string> = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
};

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