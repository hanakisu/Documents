import React, { useState } from "react";

const Card = (props) => {
  const [classDiv, setClassDiv] = useState(true);
  return (
    <div
      key={props.index}
      onClick={() => setClassDiv(!classDiv)}
      className={classDiv ? "card card-body" : "country-detail"}y>
      <img src={props.data.flag} alt={props.data.name} className="thumbnail" />
      <div className="content">
        <h6>{props.data.name}</h6>
        <strong>Population: </strong>
        {props.data.population.toLocaleString()}
        <br />
        <strong>Region</strong>
        {props.data.region}
        <br />
        <strong>Capital: </strong>
        {props.data.capital}
        <br />
      </div>
    </div>
  );
};


export default Card;