import React from 'react';
import axios from "axios";

class WeekPm extends React.Component {
    state = {
        isLoading:true,
        data:{},
    }

    getData = async() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const today = new Date().toISOString().substring(0, 10);
        const url = `/getMinuDustWeekFrcstDspth?serviceKey=${API_KEY}&returnType=json&numOfRows=1&pageNo=1&searchDate=${today}`;

        const {data:{response:{body:{items}}}} = await axios.get(url);

        this.setState({
            isLoading:false,
            data:items,
        })
         
    }
    
    componentDidMount(){
        this.getData();
    }

    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default WeekPm;