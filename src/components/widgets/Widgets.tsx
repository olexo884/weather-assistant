import React from 'react';
import styles from "../../styles/widget__styles/Widgets.module.css";
import PrecipitationIcon from '../../assets/icon/widget-icon/precipitation_icon.png';
import HumidityIcon from '../../assets/icon/widget-icon/moisture_icon.png';
import PressureIcon from '../../assets/icon/widget-icon/pressure_icon.png';

import DataWidget from './DataWidget'
import WindSpeedWidget from './WindSpeedWidget'

const Widgets: React.FC = () => {
    return (
        <section className={styles.widgetItems}>
            <WindSpeedWidget
                title="WIND"
                mainValue="9.7"
                footerText="km/h"
                angle={270}
            />
            <DataWidget title="HUMIDITY"
                mainValue="90%"
                footerText="The Dew point is 17"
                iconSrc={HumidityIcon} />
            <DataWidget
                title="RAINFALL"
                mainValue="1.88mm"
                secondaryText="In last hour"
                footerText="1.2mm expected in next hours"
                iconSrc={PrecipitationIcon}
            />
            <DataWidget
                title="PRESSURE"
                mainValue="23.6Hg"
                secondaryText="In last hour"
                footerText="25.7Hg expected in next hours"
                iconSrc={PressureIcon}
            />
        </section>
    )
}


export default Widgets