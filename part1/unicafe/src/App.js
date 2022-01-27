import React, { useState } from 'react'

const Display = ({text}) => <h1>{text}</h1>

const Button = ({text, handleClick}) => <button onClick={handleClick}> {text} </button>



const AllStats = ({allClicks, good, bad, neutral}) => {
  if(allClicks.length === 0){
    return (<p>No feedback given</p>)
  }
  const avgScore = () => {
    if(allClicks.length > 0){
      const result = allClicks.reduce((prev, curr) => prev + curr)
      return result / allClicks.length
    }
    return 0
  }

  const posScore = () => {
    if(allClicks.length > 0){
      return parseFloat(good/allClicks.length).toFixed(2)+"%"
    }
    return parseFloat(0).toFixed(2)+"%"
  }
  return (
  <table>
    <tbody>
    <tr><Stat text='good' stat = {good} /></tr>
    <tr><Stat text='neutral' stat = {neutral} /></tr>
    <tr><Stat text='bad' stat = {bad} /></tr>
    <tr><Stat text='all' stat={allClicks.length} /></tr>
    <tr><Stat text='average' stat={avgScore()} /></tr>
    <tr><Stat text='positive' stat={posScore()} /></tr>
    </tbody>
  </table>
)
}

const Stat = ({text, stat}) => {
  return (<td>{text} {stat} </td>)
}

const App = () => {
  // save the buttons to their own state
  const [good, setGood] = useState(0) //initializing the good neutral and bad states to 0
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const changeGood = () => {
    setGood(good + 1)
    setAll(allClicks.concat(1))
  }
  const changeNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat(0))
  }
  const changeBad = () => {
    setBad(bad + 1)
    setAll(allClicks.concat(-1))
  }

  return (
    <div>
      <Display text='give feedback' />
      <Button text='good' handleClick={changeGood} />
      <Button text='neutral' handleClick={changeNeutral} />
      <Button text='bad' handleClick={changeBad} />
      <Display text='statistics' />
      <AllStats allClicks={allClicks} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
