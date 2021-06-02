import React from "react";
import axios from "axios";
import Air from "../components/Air";
import "./ApPage.css";

class ApPage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  state = {
      isLoading: true,
      data: {},
      loader_text: "데이터 불러오는 중...",
      city:"김량장동",
    }
  

  getDust = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `/getMsrstnAcctoRltmMesureDnsty?stationName=${this.state.city}&dataTerm=month&pageNo=1&numOfRows=1&returnType=json&serviceKey=${API_KEY}&ver=1.3`;
    const { data: { response: { body: { items } } } } = await axios.get(url);
    
    this.setState({
      isLoading:false, data:items,
    });
    console.log(this.state.data);
  }

  componentDidMount() {
    this.getDust();
  }


  render() {
    // 필요한 데이터 목록 stationName, dataTime, coValue, o3Value, no2Value, o3Value, pm10Value, pm25Value, khaiValue 그외 &Grade

    const { isLoading, data, loader_text, city } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">{loader_text}</div>
        ) : (
          <div className="airState">
            {
              <Air
                station={city}
                date={data[0].dataTime}
                pm10vl={data[0].pm10Value}
                pm10gr={data[0].pm10Grade}
                pm25vl={data[0].pm25Value}
                pm25gr={data[0].pm25Grade}
                o3vl={data[0].o3Value}
                o3gr={data[0].o3Grade}
                covl={data[0].coValue}
                cogr={data[0].coGrade}
                no2vl={data[0].no2Value}
                no2gr={data[0].no2Grade}
                khaivl={data[0].khaiValue}
                khaigr={data[0].khaiGrade}
              />
            }
          </div>
        )}
      </section>
    );
  }
}
export default ApPage;
