
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const { confirmed, recovered, deaths, lastUpdate } = data;

        return { confirmed, recovered, deaths, lastUpdate };


    } catch (error) {

        console.log("error ==> ", error)
    }
}

export const fetchDailyData = async () => {
    try {
        const response = await fetch(`${url}/daily`);

        const data = await response.json();

        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate 
        }))

        return modifiedData;
    } catch (error) {
        console.log("error ==> ", error)
    }
}

export const fetchCountry = async () => {
    try {
        const response = await fetch(`${url}/countries`);

        const countries = await response.json();

        return countries;
    } catch (error) {
        console.log("error ==> ", error)
    }
}


