import React from 'react';

import type { CustomWeatherDotProps } from "../../types/forecast.types"

const CustomWeatherDot: React.FC<CustomWeatherDotProps> = ({
  cx, cy, payload
}) => {
  if (cx === undefined || cy === undefined || !payload) {
    return null;
  }

  const { temperature, weatherIcon, windSpeed, time } = payload;

  return (
    <>
      <image x={cx - 12} y={cy + 12} href={weatherIcon} height="24" width="24" />

      <text
        x={cx}
        y={cy - 12}
        textAnchor="middle"
        fill="#fff">
        {temperature}°
      </text>

      <text
        x={cx}
        y={cy + 50}
        textAnchor="middle"
        fill="#fff"
        fontSize={10}>
        <tspan >
          {windSpeed}km/h
        </tspan>
        <tspan x={cx} dy="14">
          {time}
        </tspan>
      </text>
      
    </>
  );
};

export default CustomWeatherDot