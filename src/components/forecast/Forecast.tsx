import React from 'react';
import {
    LineChart,
    Line,
    YAxis
} from 'recharts';

import styles from "../../styles/forecast__styles/Forecast.module.css";
import TimeIcon from '../../assets/icon/forecast-icon/time.svg';

import CustomWeatherDot from './CustomWeatherDot'
import type { ForecastProps } from '../../types/forecast.types';

const Forecast: React.FC<ForecastProps> = ({ forecastItems }) => {

    return (
        <article className={styles.forecast}>
            <div className={styles.forecastHeader}>
                <img src={TimeIcon} alt="time" />
                <h3>12-hour forecast</h3>
            </div>
            <div className={styles.graph}>
                <LineChart className={styles.chart}
                    style={{ width: '100%', height: '100%', maxHeight: '160px' }}
                    responsive
                    data={forecastItems}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 30,
                        bottom: 60,
                    }}
                >
                    <YAxis hide={true} domain={['dataMin-2', 'dataMax+2']} />
                    <Line type="monotone" dataKey="temp" stroke="#ffffffff" strokeWidth={2} activeDot={{ r: 5 }} dot={<CustomWeatherDot />} />
                </LineChart>
            </div>
        </article>
    )
}


export default Forecast