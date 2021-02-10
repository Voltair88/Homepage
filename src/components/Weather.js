import React, { Component, Fragment } from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';

export const Weather = () => {
  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '6c8418af2394e5cce07240f7513a7d95',
    lat: '59.334591',
    lon: '18.063240',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <div className='weather'>
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Stockholm"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    </div>
  );
};

export default Weather;


