import './Main.css'
import Header from '../header/Header'
import CountrySummary from '../country-summary/CountrySummary'
import Footer from '../footer/Footer'
import { useState, useEffect } from 'react';

function Main({ countriesInfo }) {
    const [selectedCountryName, setSelectedCountryName] = useState('Afghanistan');

    const handleCountrySelectionCallback = (countryName) => {
        setSelectedCountryName(countryName);
    }

    if (countriesInfo.length === 0) {
        return (<div>Cargando...</div>);
    } else {
        return(
            <>
                <div id="main">
                    <Header countries={getCountriesName(countriesInfo)} countryNameCallback={handleCountrySelectionCallback}/>
                    <CountrySummary countryInfo={getCountryInfo(countriesInfo, selectedCountryName)}/>
                    <Footer/>
                </div>
            </>
        )
    }
}

function getCountriesName(countriesInfo) {
    return countriesInfo.map((countryInfo) => countryInfo.country);
}

function getCountryInfo(countriesInfo, name) {
    return countriesInfo.find((countryInfo) => countryInfo.country === name);
}


export default Main