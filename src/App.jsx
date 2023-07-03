
import './App.css'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from './components/main/Main'
import Container10 from './components/top10/Container10'
import { useState, useEffect } from 'react';

function App() {
    const [countriesInfo, setCountriesInfo] = useState([]);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then((response) => response.json())
            .then((countriesInfo) => {
                console.log('Countries info', countriesInfo);
                setCountriesInfo(countriesInfo);
            })
    }, []);

  return (
    <>
        <Nav/>
        <div className="containerCountries">
          <Summary/>
          <Container10/>
        </div>
        <Main countriesInfo={countriesInfo}/>
    </>
  )
}


export default App
