import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Search from './components/Search'
import PersonsForm from './components/PersonsForm'

const App = () => {
  const [persons, setPersons] = useState([])
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

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

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