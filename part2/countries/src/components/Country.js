const Country = ({mult, country}) => {
    if (mult){
        return (
            <li>
                {country.name.official}
            </li>
        )
    }
    else { //single display country
        return(
            <>
            <h1>{country.name.common}</h1>
            <b>Capital:</b>{country.capital}
            <br></br>
            <b>Area:</b>{country.area}
            <br></br>
            <b>Languages:</b>
            <ul>
                {Object.keys(country.languages).map(language => 
                    <li key={language}>{country.languages[language]}</li>
                )}
            </ul>
            </>
        )
    }
}

export default Country