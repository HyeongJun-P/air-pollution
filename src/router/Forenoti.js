import React, { Component } from 'react';
import axios from "axios";
import Fn from "../components/Fn";
class Forenoti extends Component {
    state = {
        data:{}
    }

    getFn = async () => {
        const API_KEY=process.env.REACT_APP_API_KEY;
        const today = new Date.toISOString().substring(0,10);
        const url=`/getMinuDustFrcstDspth?serviceKey=${API_KEY}&returnType=json&numOfRows=1&pageNo=1&searchDate=${today}`;
        
        const {response : {body : {items}}} =
        await axios.get(url)

        this.setState({
            data:items
        })

        console.log(this.state.data);
    }

    componentDidMount(){
        this.getFn();
    }

    render() { 
        const data = this.state;
        return (
            <section>
                <Fn 
                infoC={data[0].informCause}
                infoO={data[0].informOverall}
                infoD={data[0].informDate}
                dTime={data[0].dataTime}
                />
            </section>
        );
    }
}
 
export default Forenoti;
