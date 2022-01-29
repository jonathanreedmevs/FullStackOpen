import React from 'react'

const Person = ({person}) => {
  return(
    <>
      <p>{person.name} - {person.number}</p>
    </>
  )
}

const Persons =({persons, search}) => {
    if(search.length === 0){
        return(
            <>
              {persons.map(person => 
                        <Person key={person.name} person={person} />
                        )}
            </>
          )
    }
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredPersons);
    
    return (
        <>
            {
                filteredPersons.map(person =>
                    <Person key={person.name} person={person} />
                )
            }
        </>
    )
}

export default Persons