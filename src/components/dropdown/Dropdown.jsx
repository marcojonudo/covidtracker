import './dropdown.css'
import { useState, useEffect } from 'react';

function Dropdown({ countries, countryNameCallback }) {
    function onChange(event) {
        countryNameCallback(event.target.value);
    }

    return(
        <div id="dropdown">
            <div className="country-select-box">
                <select className="country-picker" id="CoronaUpdateByCountry" onChange={onChange}>
                    {
                        countries.map(country => {
                            return (
                                <option key={country} value={country}>
                                    { country }
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default Dropdown;