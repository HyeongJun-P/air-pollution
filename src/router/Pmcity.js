import React from 'react';
import axios from "axios";


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
        return (
            <div>

            </div>
        );
    }
}
 
export default PmCity;