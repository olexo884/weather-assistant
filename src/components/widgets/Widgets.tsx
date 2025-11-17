import React from 'react';
import styles from "../../styles/widget__styles/Widgets.module.css";
import PrecipitationIcon from '../../assets/icon/widget-icon/precipitation_icon.png';
import HumidityIcon from '../../assets/icon/widget-icon/moisture_icon.png';
import PressureIcon from '../../assets/icon/widget-icon/pressure_icon.png';

import DataWidget from './DataWidget'
import WindSpeedWidget from './WindSpeedWidget'

import type { WidgetMainProps } from "../../types/widget.types"

const Widgets: React.FC<WidgetMainProps> = ({
    humidity,
    pressure,
    windDeg,
    windSpeed,
    visibility,
    units
}) => {

    return (
        <section className={styles.widgetItems}>
            <WindSpeedWidget
                title="WIND"
                mainValue={windSpeed}
                angle={windDeg}
                units={units}
            />
            <DataWidget title="HUMIDITY"
                mainValue={humidity}
                iconSrc={HumidityIcon}
                signUnits='%'
            />
            <DataWidget
                title="VISIBILITY"
                mainValue={visibility && visibility / 100}
                secondaryText="In last hour"
                iconSrc={PrecipitationIcon}
                signUnits='%'
            />
            <DataWidget
                title="PRESSURE"
                mainValue={pressure}
                secondaryText="In last hour"
                iconSrc={PressureIcon}
                signUnits='hPa'
            />
        </section>
    )
}


export default Widgets