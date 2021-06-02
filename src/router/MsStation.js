import React from 'react';
import axios from "axios";

class MsStation extends React.Component {
    state = {
        isLoading:true,
        data:{},
    }

    getMs = async() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `/getUnityAirEnvrnIdexSnstiveAboveMsrstnList?serviceKey=${API_KEY}&returnType=json&numOfRows=1&pageNo=1`;

        const {data:{response:{body:{items}}}} = await axios.get(url);

        this.setState({
            isLoading:false,
            data:items,
        })
        
    }
    
    componentDidMount(){
        this.getMs();
    }

    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default MsStation;