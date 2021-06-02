import React, { Component } from "react";
import axios from "axios";
import Fn from "../components/Fn";
import "./Forenoti.css";

class Forenoti extends Component {
  state = {
    data: {},
    isLoading: true,
  };

  getForenoti = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const today = new Date().toISOString().substring(0, 10);
    const url = `/getMinuDustFrcstDspth?serviceKey=${API_KEY}&returnType=json&numOfRows=1&pageNo=1&searchDate=${today}`;

    const { data: { response: { body: { items } } } } = await axios.get(url);

    console.log(items);

    this.setState({
      data: items,
      isLoading: false,
    });

  };

  componentDidMount() {
    this.getForenoti();
  }

  render() {
    const {isLoading, data} = this.state;
    return (
      <section className="container">
        {isLoading ?
          <div className="loader">로딩 중...</div> :
          <div className="information">
            <Fn
              infoC={data[0].informCause}
              infoO={data[0].informOverall}
              infoD={data[0].informDate}
              dTime={data[0].dataTime}
            />
          </div>
        }
      </section>
    );
  }
}

export default Forenoti;
