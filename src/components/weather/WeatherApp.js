import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import visualInfo from "./visualInfo.json";

const apiUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=31.77&longitude=35.22&hourly=temperature_2m&daily=weathercode&timezone=auto";

export default function WeatherApp() {
  const [location, setLocation] = useState([]);
  const [days, setDays] = useState([]);
  const [temps, setTemps] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [icons, setIcons] = useState([]);
  const [colors, setColors] = useState([]);

  const getDayName = (dates) => {
    const days = [];
    for (let i = 0; i < dates.length; i++) {
      const date = new Date(dates[i]);
      const day = visualInfo.weekDays[date.getDay()];
      days.push(day);
    }
    return days;
  };

  const getTemps = (allTemps) => {
    // const days/hours = {
    //   day0: [0, 23],
    //   day1: [24, 47],
    //   day2: [48, 71],
    //   day3: [72, 95],
    //   day4: [95, 119],
    //   day5: [120, 143],
    //   day6: [144, 167],
    // };

    const dailyTemps = [];
    const avgTemp = (end) => {
      let sum = 0;
      for (let i = 0; i < end + 1; i++) {
        sum += allTemps[i];
        if ((i + 1) % 24 === 0) {
          const average = sum / 24;
          dailyTemps.push(Math.round(average));
          sum = 0;
        }
      }
    };
    avgTemp(167);
    return dailyTemps;
  };

  const getDailyVisualInfo = (apiWeatherCodeArr) => {
    const dailyVisualsInfo = {
      background: [],
      description: [],
      icons: [],
      colors: [],
    };

    for (let i = 0; i < apiWeatherCodeArr.length; i++) {
      for (const key in visualInfo.weatherCodes) {
        if (Object.hasOwnProperty.call(visualInfo.weatherCodes, key)) {
          if (
            visualInfo.weatherCodes[key].indexOf(apiWeatherCodeArr[i]) !== -1
          ) {
            dailyVisualsInfo.background[i] =
              visualInfo.weatherInfo[key].weatherBackgrounds;
            dailyVisualsInfo.description[i] =
              visualInfo.weatherInfo[key].weatherDescriptions;
            dailyVisualsInfo.icons[i] =
              visualInfo.weatherInfo[key].weatherIcons;
            dailyVisualsInfo.colors[i] =
              visualInfo.weatherInfo[key].weatherColors;
            break;
          }
          // console.log("count");
        }
      }
    }
    return dailyVisualsInfo;
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        setLocation(json.timezone.split("/")[1]);
        setDays(getDayName(json.daily.time));
        setTemps(getTemps(json.hourly.temperature_2m));

        const dailyVisuals = getDailyVisualInfo(json.daily.weathercode);

        setBackgrounds(dailyVisuals["background"]);
        setDescriptions(dailyVisuals["description"]);
        setIcons(dailyVisuals["icons"]);
        setColors(dailyVisuals["colors"]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Weather
        location={location}
        days={days}
        temps={temps}
        backgrounds={backgrounds}
        descriptions={descriptions}
        icons={icons}
        colors={colors}
      />
    </>
  );
}
