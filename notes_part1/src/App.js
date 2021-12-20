import React, {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )


const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  console.log('rendering...', counter)

  return (
    <>
      <Display counter={counter} />
      <Button handleClick = {increaseByOne} text='plus' />
      <Button handleClick = {decreaseByOne} text='minus' />
      <Button handleClick = {setToZero} text='zero'/>
    </>
  )
}

export default App;
