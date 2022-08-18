import Country from './Country'
const Countries = ({countries}) => {
    if (countries.length === 1){
        return(<Country mult={false} country={countries[0]}/>)
    }
    else if (countries.length > 10) {
        return(<>Too many matches specify another filter</>)
    }
    return(
        <ul>
            {countries.map(country =>
                <Country mult={true} key={country.name.official} country={country}/>)}
        </ul>
    )

}

export default Countries