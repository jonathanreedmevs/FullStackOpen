import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const handleSearchChange = (event) => {    
    setNewSearch(event.target.value);
  }

  const toggleShow = (event, countryName) => {
          console.log(countryName);       
          setNewSearch(countryName)
  }

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response =>
        setCountries(response.data)
        )
  }
  useEffect(hook, [])
  return (
    <>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange}/>
      <Countries countries={countries} search={newSearch} toggleShow={toggleShow}/>
    </>
  );
}

export default App;
