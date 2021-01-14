import React from "react";

const Weather = ({ error, data }) => {
  return (
    <div>
      {data && (
        <div>
          <p>
            Местоположение:{data.city},{data.country}{" "}
          </p>
          <p>Температура:{data.temp}</p>
          <p>Давление:{data.pressure}</p>
          <p>Заход солнца:{data.sunset}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
