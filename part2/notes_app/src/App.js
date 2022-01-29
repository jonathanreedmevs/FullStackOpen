import React, {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('enter note here...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    /*
      We don't need a prevent default
      because input doesn't have a default action like a form
    **/
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll 
  ? notes 
  : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notes.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote}
                 onChange ={handleNoteChange}
          />
          <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App