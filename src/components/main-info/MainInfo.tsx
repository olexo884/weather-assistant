import React from 'react';
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

import type {MainInfoProps} from "../../types/mainInfo.types"

const WeatherIconMap: Record<string, string> = {
    '01d': ClearSkyIcon,
    '02d': FewCloudsIcon,
    '03d': ScatteredCloudsIcon,
    '04d': BrokenCloudsIcon,
    '09d': ShowerRainIcon,
    '10d': RainIcon,
    '11d': ThunderstormIcon,
    '13d': SnowIcon,
    '50d': MistIcon,
}

const MainInfo: React.FC<MainInfoProps> = ({
    temperature,
    exactDate,
    weatherConditions,
    location,
    weatherIconCode }
) => {
    return (
        <article className={styles.info}>
            <div className={styles.MainInfo}>
                <div className={styles.infoHeader}>
                    <img src={MarkerIcon} alt="marker" />
                    <p>{location}</p>
                    <img src={ArrowIcon} alt="arrow" />
                </div>
                <h3>{weatherConditions}</h3>
                <h1>{temperature}</h1>
                <p>{exactDate}</p>
            </div>
            <img src={WeatherIconMap[weatherIconCode]} alt={weatherConditions} />
        </article>
    )
}


export default MainInfo