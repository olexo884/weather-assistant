import React from 'react';

import HumidityIcon from '../../../assets/icon/widget-icon/precipitation_icon.svg';
import SunriseIcon from '../../../assets/icon/widget-icon/sunrise.svg';
import SunsetIcon from '../../../assets/icon/widget-icon/sunset.svg';
import PressuretIcon from '../../../assets/icon/widget-icon/pressure_icon.svg';
import TemperatureIcon from '../../../assets/icon/widget-icon/temperature.svg';

import styles from "../../../styles/main-info__styles/MainWeatherWidgets.module.css";
import Widget from './widgets/Widget';
import WindWidget from './widgets/WindWidget';

const MainWeatherWidgets: React.FC = () => {
    return (
        <article className={styles.main}>
            <div className={styles.header}>
                <Widget
                    title="FEELS LIKE"
                    mainValue={"+32.5"}
                    iconSrc={TemperatureIcon}
                    signUnits={"°C"}
                />
                <WindWidget
                    mainValue={9.7}
                    angle={0}
                    units='metric'
                />
            </div>
            <div className={styles.bottom}>
                <Widget
                    title="HUMIDITY"
                    mainValue={"82"}
                    iconSrc={HumidityIcon}
                    signUnits={"%"}
                />
                <Widget
                    title="SUNSET"
                    mainValue={"08:30"}
                    iconSrc={SunsetIcon}
                    signUnits={"PM"}
                />
                <Widget
                    title="PRESSURE"
                    mainValue={"1002"}
                    iconSrc={PressuretIcon}
                    signUnits={"HPA"}
                />
                <Widget
                    title="SUNRISE"
                    mainValue={"04:21"}
                    iconSrc={SunriseIcon}
                    signUnits={"AM"}
                />
            </div>
        </article>
    )
}


export default MainWeatherWidgets