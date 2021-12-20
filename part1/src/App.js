const Hello = (props) => {
  return(
  <div>
    <p>Hello world {props.name}! You are {props.age} years old</p>
  </div>
  )
}

const App = () => {
  const person = {
    age: "17",
    name: "Your Moms House"
  }
  return(
  <div>
    <h1>Greetings</h1>
    <Hello name="Testicles" age ="69"/>
    <Hello name={person.name} age={person.age}/>
  </div>
  )
}

export default App;
