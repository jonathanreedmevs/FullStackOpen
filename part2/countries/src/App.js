
import Countries from './components/Countries'
import Search from './components/Search'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setAllCountries(response.data)
    })
  }
  useEffect(hook, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    console.log(event.target.value)
    if (event.target.value.length === 0){
      setCountries([])
    }
   
    setCountries(allCountries.filter(country => country.name.common.toLowerCase().startsWith(newSearch.toLowerCase())))
   
   
  
  }

  

  return (
    <>
      <div>
        search countries <input value={newSearch} onChange = {handleSearchChange} />
      </div>
    <Countries countries = {countries} />
    </>
  );
}

export default App;
