import React from 'react'

import CountUp from 'react-countup';

import "./cardTemp.css"

const CardTemp = (props) => {
    const data = props.dataProp;
    let borderColor;
    switch (data.statusHead) {
        case "Infected":
            borderColor = "#ff3232"
            break;
        case "Recovered":
            borderColor = "#198c19"
            break;
        case "Deaths":
            borderColor = "#e5e5e5"
            break;
        default:
            break;
    }
    let numbers = parseInt(data.numbers);
    return (
        <div id="main" style={{
            borderLeft: `3px solid ${borderColor}`
        }}>
            <p>
                {data.statusHead}
            </p>
            <p id="num">
                <CountUp start={0} end={numbers} duration={2} separator="," />
            </p>
            <p>
                {data.date}
            </p>
            <p id="sB">
                {data.statusBody}
            </p>
        </div>
    )
}

export default CardTemp
