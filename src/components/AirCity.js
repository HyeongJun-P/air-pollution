import React from "react";
import PropTypes from "prop-types";
import "./Air.css";

const Grade = ({ Grade }) => {
    // eslint-disable-next-line default-case
    switch (Grade) {
      case "1":
        return <b style={{ color: "blue" }}>좋음!</b>;
      case "2":
        return <b style={{ color: "green" }}>보통</b>;
      case "3":
        return <b style={{ color: "orange" }}>나쁨!</b>;
      case "4":
        return <b style={{ color: "red" }}>매우 나쁨!!</b>;
    }
  }

function AirCity({
  date,
  pm10vl,
  pm10gr,
  pm25vl,
  pm25gr,
  o3vl,
  o3gr,
  covl,
  cogr,
  no2vl,
  no2gr,
  khaivl,
  khaigr,
  sidoName,
  stationName
}) {
  return (
    <div className="Dust">
      <h3>
        <span className="측정소">측정소</span><br></br>
        <span className="stationName">{stationName}</span><br></br>
        <span className="sidoName">{sidoName}</span>
      </h3>
      <div className="date">측정일시 : {date}</div>
      <div className="pm10">
        미세먼지 : <span className="pm10vl">{pm10vl}</span>μg/m³
        <br />
        grade: <Grade Grade={pm10gr} />
      </div>
      <div className="pm25">
        초미세먼지 : <span className="pm10vl">{pm25vl}</span>μg/m³
        <br />
        grade: <Grade Grade={pm25gr} />
      </div>
      <div className="flex">
        <p>
          오존
          <br></br>
          {o3vl}ppm
          <br></br>
          <Grade Grade={o3gr} />
        </p>
        <p>
          일산화탄소<br></br>
          {covl}ppm<br></br>
          <Grade Grade={cogr} />
        </p>
        <p>
          이산화질소<br></br>
          {no2vl}ppm<br></br>
          <Grade Grade={no2gr} />
        </p>
        <div className="All">
          <p>
          통합대기환경수치<br></br>
          {khaivl}<br></br>
          <Grade Grade={khaigr} />
          </p>
        </div>
      </div>
    </div>
  );
}

Grade.propTypes = {
  Grade: PropTypes.string.isRequired,
};

AirCity.propTypes = {
  station: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  pm10vl: PropTypes.string.isRequired,
  pm10gr: PropTypes.string.isRequired,
  pm25vl: PropTypes.string.isRequired,
  pm25gr: PropTypes.string.isRequired,
  o3vl: PropTypes.string.isRequired,
  o3gr: PropTypes.string.isRequired,
  covl: PropTypes.string.isRequired,
  cogr: PropTypes.string.isRequired,
  no2vl: PropTypes.string.isRequired,
  no2gr: PropTypes.string.isRequired,
  khaivl: PropTypes.string.isRequired,
  khaigr: PropTypes.string.isRequired,
};

export default AirCity;
