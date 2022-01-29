import React, { useState } from 'react'
import Persons from './components/Persons'
import Search from './components/Search'
import PersonsForm from './components/PersonsForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    const names = persons.map(person => person.name)
    names.push(newPerson.name)
    const filter = names.filter(name => name === newPerson.name)

    if(filter.length > 1){
      alert(`${newPerson.name} is already in the phonebook!`)
      setNewName('')
      setNewNumber('')
    }
    else{
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const [newSearch, setNewSearch] = useState('')

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange}/>
      <br />
      <PersonsForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber = {newNumber} handleNumberChange={handleNameChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={newSearch}/>
    </div>
  )
}

export default App