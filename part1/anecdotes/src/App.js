import React, { useState } from 'react'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Anecdote = ({selected, votes, anecdote}) => {
  return(
  <>
    <h1>Anecdote of the Day</h1>
    <p>{anecdote}</p>
    <p>Votes: {votes[selected]} </p>
  </>
)
}

const TopAnecdote = ({topAnecdote, anecdotes, votes}) => {
  return (
  <>
    <h1>Top Voted Anecdote</h1>
    <p>{anecdotes[topAnecdote]}</p>
    <p>{votes[topAnecdote]} votes </p>
  </>
)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [topAnecdote, setTopAnecdote] = useState(0)

  const randAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const castVote = () => {
    const copy = [...votes]
    console.log(copy, selected)
    copy[selected] += 1
    setVotes(copy)

    //get index of max from Votes
    //update index in state
    console.log(votes)
    let max = Math.max(...votes)
    console.log(max)
    let maxIdx = votes.indexOf(max)
    setTopAnecdote(maxIdx)
  }

  return (
    <div>
      <Anecdote selected = {selected} votes={votes} anecdote={anecdotes[selected]} />
      <Button text='vote' handleClick={castVote} />
      <Button text='next anecdote' handleClick={randAnecdote} />
      <TopAnecdote topAnecdote={topAnecdote} anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App
