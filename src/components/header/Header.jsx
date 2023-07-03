import './header.css';
import Dropdown from '../dropdown/Dropdown';

function Header({ countries, countryNameCallback }) {
    return(
        <div id="header">
          <Dropdown countries={countries} countryNameCallback={countryNameCallback}/>       
        </div>
       
    );
}

export default Header;