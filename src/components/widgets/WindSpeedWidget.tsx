import React from 'react';
import styles from "../../styles/widget__styles/WindSpeedWidget.module.css";
import WindIcon from '../../assets/icon/widget-icon/wind_icon.png';
import CompassIcon from '../../assets/icon/widget-icon/compass_icon.svg';
import DirectionsIcon from '../../assets/icon/widget-icon/directions_icon.svg';

import type {WindSpeedProps} from "../../types/widget.types"


const WindSpeedWidget: React.FC<WindSpeedProps> = (
    {
        title,
        mainValue,
        angle,
        footerText }) => {
    return (
        <article className={styles.widget}>
            <div className={styles.widgetHeader}>
                <img src={WindIcon} alt={`${title} icon`} />
                <p>{title}</p>
            </div>
            <div className={styles.widgetMain}>
                <img style={{transform: `rotate(${angle}deg)`}} className={styles.widgetCompass} src={CompassIcon} alt="wind direction icon" />
                <img className={styles.widgetBG} src={DirectionsIcon} alt="directions icon" />
                <div>
                    <h3>{mainValue}</h3>
                    <p>{footerText}</p>
                </div>
            </div>
        </article>
    )
}


export default WindSpeedWidget