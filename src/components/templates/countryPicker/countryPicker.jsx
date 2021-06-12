import { FormControl, NativeSelect } from '@material-ui/core';

import React, { useEffect, useState } from 'react'

import { fetchCountry } from '../../../api';

import './countryPicker.css';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    // let [isData, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await fetchCountry();

            console.log(data)
            fetchedCountries = data
            setFetchedCountries(data);
            console.log(fetchedCountries.countries)
        }
        getData();
    }, []);
    const countries = fetchedCountries.countries;

    if (!fetchedCountries) {
        return <h1>h</h1>
    }

    return (
        <div style={{
            paddingTop: "5vw"
        }}>
            <FormControl>
                <NativeSelect className="selectOption">
                    <option value="global" >Global</option>
                    {countries.map((country, i) =>
                        <option key={i} value={country.name}>{country.name}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
