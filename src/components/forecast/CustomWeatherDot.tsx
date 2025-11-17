import React, { useMemo } from 'react';

import type { CustomWeatherDotProps } from "../../types/forecast.types"
import { WeatherIconMap } from '../../types/weatherMap.types';

const CustomWeatherDot: React.FC<CustomWeatherDotProps> = ({
  cx, cy, payload
}) => {
  if (cx === undefined || cy === undefined || !payload) {
    return null;
  }

  const { temp, icon, windSpeed, timestamp, units } = payload;

  const formattedDateTime = useMemo(() => {
    if (!timestamp) return null;
    return new Date(timestamp * 1000);
  }, [timestamp]);

  return (
    <>
      <image x={cx - 12} y={cy + 12} href={WeatherIconMap[icon.slice(0, 2)]} height="24" width="24" />

      <text
        x={cx}
        y={cy - 12}
        textAnchor="middle"
        fill="#fff">
        {temp}{units === 'metric' ? "°C" : "°F"}
      </text>

      <text
        x={cx}
        y={cy + 50}
        textAnchor="middle"
        fill="#fff"
        fontSize={10}>
        <tspan >
          {windSpeed}{units === 'metric' ? "m/sec" : "mils/h"}
        </tspan>
        <tspan x={cx} dy="14">
          {formattedDateTime && formattedDateTime?.getHours() < 10 ? "0"+ formattedDateTime?.getHours() : formattedDateTime?.getHours()}:00
        </tspan>
      </text>

    </>
  );
};

export default CustomWeatherDot