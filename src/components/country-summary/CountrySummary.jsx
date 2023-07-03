
import './country-summary.css'
import Card from '../card/Card'

function CountrySummary({ countryInfo }) {
    return(
        <div id="country-summary">
            <Card title='Total Cases' counter={countryInfo.cases} color = 'purpple'/>
            <Card title='Total Deaths' counter={countryInfo.deaths} color = 'red'/>
            <Card title='Total Recovered' counter={countryInfo.recovered} color = 'green'/>
            <Card title='Total Active' counter={countryInfo.active} color = 'blue'/>
            <Card title='New Cases' counter={countryInfo.todayCases} color = 'orange'/>
            <Card title='New Deaths' counter={countryInfo.todayDeaths} color = 'dark-red'/>
        </div>
    );
}

export default CountrySummary;