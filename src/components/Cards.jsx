import React, { useEffect, useState } from 'react';

import CardTemp from './templates/card/CardTemp';

import { fetchData } from '../api';

const Cards = () => {
    const [data , setData ] = useState(
        {
            confirmed: {
                value: '1234'
            },
            recovered: {
                value: '1234'
            },
            deaths: {
                value: '1234'
            },
            lastUpdate: "2020-06-11T22:23:17.000Z"
        }
    );
    useEffect(() => {
        const getData = async () => {
            const rawData = await fetchData();
            setData(rawData);
        }
        getData();
      },[]);
    //   console.log(data.confirmed)
      let date = new Date(data.lastUpdate).toDateString();
    const objData = [
        {
            statusHead : "Infected",
            numbers : `${data.confirmed.value}`,
            date : `${date}`,
            statusBody : "Active cases of Covid-19"
        },
        {
            statusHead : "Recovered",
            numbers : `${data.recovered.value}`,
            date : `${date}`,
            statusBody : "Recovered cases of Covid-19"
        },
        {
            statusHead : "Deaths",
            numbers : `${data.deaths.value}`,
            date : `${date}`,
            statusBody : "Deaths because of Covid-19"
        }
    ]
    return (
        <div className="cardGrids">
            {objData.map((objData, index) => 
                <div key={index} className = "parentDiv">
                    <CardTemp  dataProp={objData}/>
                </div>
            )}
        </div>
    )
}

export default Cards
