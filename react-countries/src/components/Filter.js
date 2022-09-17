import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faEarthAmerica, faEarthAfrica, faEarthEurope, faCaretDown, faEarthAsia, faEarthOceania, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalState';

export const Filter = () => {
  const {term, changeTerm, continent, changeContinent} = useContext(GlobalContext);
  const [dropDown, setDropDown] = useState(false);

  return (
    <aside className='filterComponent'>

      <form autoComplete="off" className="searchbar" autoFocus onSubmit={(event) => event.preventDefault()}>
        <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
        <label for="searchFilter" />
        <input type="text" className="searchSpace" id="search" value={term} onChange={ (event) => changeTerm(event.target.value)} placeholder="Search for a country..." name='searchFilter'/>
      </form>

      <form className="filterbar" onClick={()=> {setDropDown(!dropDown)}} onSubmit={(event) => event.preventDefault()}>
        <label for="regionFilter" />
        <input type="text" value={continent} readOnly name="regionFilter"/>
        <FontAwesomeIcon icon={faCaretDown} className='dropdown-icon'/>
        <div className={dropDown ? 'options' : 'options hide'} id='options'>
          <div onClick={() => changeContinent('World')}><FontAwesomeIcon icon={faGlobe} /> World</div>
          <div onClick={() => changeContinent('Africa')}><FontAwesomeIcon icon={faEarthAfrica} /> Africa</div>
          <div onClick={() => changeContinent('America')}><FontAwesomeIcon icon={faEarthAmerica} />  America</div>
          <div onClick={() => changeContinent('Asia')}><FontAwesomeIcon icon={faEarthAsia} /> Asia</div>
          <div onClick={() => changeContinent('Europe')}><FontAwesomeIcon icon={faEarthEurope} /> Europe</div>
          <div onClick={() => changeContinent('Oceania')}><FontAwesomeIcon icon={faEarthOceania} />  Oceania</div>
        </div>

      </form>
    </aside>
  )
}
