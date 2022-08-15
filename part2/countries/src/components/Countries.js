import React, {useState} from 'react'



const CountryName = ({country, toggleShow, setTemp}) => {
    // const [clicked, setClicked] = useState(false)
    // const handleShow = () => {
        
    // 
    return(
        <>
            
                <p>
                    {country.name.common} {' '}
                    <button onClick={(e) => toggleShow(e, country.name.common)}>show</button>
                </p>
            
            
        </>
    )
}

const Language = ({language}) => {
    return (
        <>
            <li>{language}</li>
        </>
    )
}

const Languages = ({languages}) => {    
    return(
        <>
            <ul>
            {
                languages.map(language =>
                    <Language key={language} language={language}/>
                    )
            }
            </ul>
        </>
    )
}

const SingleCountry = ({country}) => {
    //console.log(country);
    
    return(
        <>
            <h1>{country.name.common}</h1>
            <p>{country.capital[0]}</p>
            <p>{country.population.toLocaleString()}</p>
            <h2>Languages</h2>
            <Languages languages={Object.values(country.languages)} />
            <img src={country.flags.png} />
        </>
    )
}

const Countries = ({countries, search, toggleShow}) => {
    //console.log(countries);
    
    if(search.length ===0){
        return(
            <>
                <p>Type in a country to find more details!</p>
            </>
        )
    }
    
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    //console.log(filteredCountries);

    if(filteredCountries.length > 10){
        return(
            <>
                <p>Too many matches! Make query more specific!</p>
            </>
        )
    }

    else if(filteredCountries.length !== 1) {
        return(
            <>
               {
                   filteredCountries.map(country => {
                    
                    return (
                        <CountryName key={country.name.common} country={country} toggleShow={toggleShow}/>
                    )
                   }
                   )
               }
            </>
        )
    }

    else{
        return(
            <>
                <SingleCountry country={filteredCountries[0]}/>
            </>
        )
    }
    
}

export default Countries