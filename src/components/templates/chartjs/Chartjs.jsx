import React, { useState, useEffect } from 'react'

import { fetchDailyData } from '../../../api';

import { Line , Bar } from 'react-chartjs-2';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchData();
    }, []);

    const lineChart = (
        dailyData.length
        ? 
        (
            <Line data={{
                labels : dailyData.map(({ date }) => date) ,
                datasets : [{
                    data : dailyData.map(({ confirmed }) => confirmed),
                    label : 'Infected',
                    borderColor : '#ff3232',
                    backgroundColor : "#c751cd1f",
                    fill : true
                },{
                    data : dailyData.map(({ deaths }) => deaths),
                    label : 'Deaths',
                    borderColor : '#e5e5e5',
                    backgroundColor : "#8639f90e",
                    fill : true
                }]
            }} />
        )
        : null
    );
    
    const barChart = (
        <Bar />
    )

    return (
        <div style={{
            paddingTop: "5vw"
        }}>
            {lineChart}
        </div>
    )
}

export default Chart
