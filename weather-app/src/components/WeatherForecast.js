import React from "react";

function WeatherForecast({ forecastData }) {
  if (!forecastData || !forecastData.list) return null;

  const dailyForecast = forecastData.list
    .filter((entry) => entry.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  if (dailyForecast.length === 0) {
    return null;
  }

  return (
    <section className="forecast">
      <h3 className="forecast__title">5-Day Forecast</h3>
      <div className="forecast__scroller">
        {dailyForecast.map((day) => {
          const date = new Date(day.dt_txt);
          const readableDate = date.toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          });

          return (
            <article key={day.dt} className="forecast-card">
              <span className="forecast-card__day">{readableDate}</span>
              <span className="forecast-card__temp">{Math.round(day.main.temp)}°C</span>
              <span className="forecast-card__condition">{day.weather[0].main}</span>
              <span className="forecast-card__description">
                {day.weather[0].description}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default WeatherForecast;