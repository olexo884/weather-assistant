import React from 'react';
import {
    LineChart,
    Line,
    YAxis
} from 'recharts';

import styles from "../../styles/forecast__styles/Forecast.module.css";

import CustomWeatherDot from './CustomWeatherDot'
import type { ForecastProps } from '../../types/forecast.types';

const Forecast: React.FC<ForecastProps> = ({ forecastItems }) => {

    return (
        <article className={styles.forecast}>
            <h3 className={styles.forecastTitle}>FORECAST</h3>
            <hr />
            <div className={styles.graph}>
                <LineChart className={styles.chart}
                    style={{ width: '100%', height: '100%', maxHeight: '180px' }}
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