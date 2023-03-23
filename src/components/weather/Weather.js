import React from "react";
import "./weather.css";

export default function Weather(props) {
  // console.log(props);

  return (
    <div className="weather">
      <div className="weather-bg">
        <img src={props.backgrounds[0]} alt="weather background" />
      </div>
      <header>
        <h1>weather</h1>
      </header>
      <div id="location">{props.location}</div>
      <div className="cards-container">
        <div className="card-day today">
          <div className={props.colors[0]} name="color">
            <span id="date">{props.days[0]}</span>
          </div>
          <div className="card-body">
            <span id="temp">{props.temps[0]}&deg;</span>
            <span id="icon" className={props.icons[0]}></span>
            <span id="description">{props.descriptions[0]}</span>
          </div>
        </div>
        <div className="card-day">
          <div className={props.colors[1]} name="color">
            <span id="date">{props.days[1]}</span>
          </div>
          <div className="card-body">
            <span id="temp">{props.temps[1]}&deg;</span>
            <span id="icon" className={props.icons[1]}></span>
            <span id="description">{props.descriptions[1]}</span>
          </div>
        </div>
        <div className="card-day">
          <div className={props.colors[2]} name="color">
            <span id="date">{props.days[2]}</span>
          </div>
          <div className="card-body">
            <span id="temp">{props.temps[2]}&deg;</span>
            <span id="icon" className={props.icons[2]}></span>
            <span id="description">{props.descriptions[2]}</span>
          </div>
        </div>
        <div className="card-day">
          <div className={props.colors[3]} name="color">
            <span id="date">{props.days[3]}</span>
          </div>
          <div className="card-body">
            <span id="temp">{props.temps[3]}&deg;</span>
            <span id="icon" className={props.icons[3]}></span>
            <span id="description">{props.descriptions[3]}</span>
          </div>
        </div>
        <div className="card-day">
          <div className={props.colors[4]} name="color">
            <span id="date">{props.days[4]}</span>
          </div>
          <div className="card-body">
            <span id="temp">{props.temps[4]}&deg;</span>
            <span id="icon" className={props.icons[4]}></span>
            <span id="description">{props.descriptions[4]}</span>
          </div>
        </div>
        <div className="card-day">
          <div className={props.colors[5]} name="color">
            <span id="date">{props.days[5]}</span>
          </div>
          <div className="card-body">
            <span id="temp">{props.temps[5]}&deg;</span>
            <span id="icon" className={props.icons[5]}></span>
            <span id="description">{props.descriptions[5]}</span>
          </div>
        </div>
        <div className="card-day">
          <div className={props.colors[6]} name="color">
            <span id="date">{props.days[6]}</span>
          </div>
          <div className="card-body">
            <span id="temp">{props.temps[6]}&deg;</span>
            <span id="icon" className={props.icons[6]}></span>
            <span id="description">{props.descriptions[6]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
