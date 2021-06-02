import React from "react";
import axios from "axios";
import AirCity from "../components/AirCity";

class PmCity extends React.Component {
    state = {
        isLoading:true,
        data:{},
    }

    getCity = async() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&numOfRows=1&pageNo=1&sidoName=경기&ver=1.3`;

        const {data:{response:{body:{items}}}} = await axios.get(url);

        this.setState({
            isLoading:false,
            data:items,
        }) 
        console.log(this.state.data);

    }

    componentDidMount(){
        this.getCity();
    }
    
    render() {
        const {data, isLoading} = this.state;
        return(
            <section className="container">
                {isLoading ?
                <div className="loader">
                    로딩 중...
                </div> :
                <div>
                    <AirCity
                    stationName={data[0].stationName}
                     sidoName={data[0].sidoName}
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
                </div>
                }
            </section>
        );
    }
}
 
export default PmCity;