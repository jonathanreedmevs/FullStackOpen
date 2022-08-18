import React from 'react'
import { useState, useEffect } from 'react'
import Person from './components/Person'
import Form from './components/Form'
import axios from 'axios'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')


  const hook = () => {
    
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    
    const dup = persons.some((person) => person.name === newPerson.name)
    if (!dup) {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      
    }
    else{
      if(window.confirm(`${newPerson.name} is already added to the phonebook. Replace the old number with a new one?`)){
        // const note = notes.find(n => n.id === id)
        // const changedNote = { ...note, important: !note.important }
        const person = persons.find(p => p.name === newPerson.name)
        const changedPerson = {...person, number: newNumber}
        //console.log(changedPerson)
        personService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            // const changedNote = { ...note, important: !note.important }
            //console.log(returnedPerson)
            // const changedPerson = {}
            setPersons(persons.map(p => p.id !== changedPerson.id ? p : changedPerson))
          }).catch(error => {
            alert(`error updating ${changedPerson.name}`)
          })
        
      }
    }
    
  }

  const handleRemove = (person) => {
    if (window.confirm(`Are you sure you want to delete entry for ${person.name}?`)){
      personService
      .remove(person.id)
      .then(request =>
        setPersons(persons.filter(p => p.id !== person.id))
        
        )
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().startsWith(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newSearch} onChange = {handleSearchChange} />
      </div>
      <Form addName = {addName} newName = {newName} handleNameChange = {handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
      {namesToShow.map(person =>
        <Person key = {person.name} person = {person} remove={() => handleRemove(person)}/>)}
      </ul>
      
    </div>
  )
}

export default App