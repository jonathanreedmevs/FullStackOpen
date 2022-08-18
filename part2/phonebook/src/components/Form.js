import Input from './Input'

const Form = ({addName, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return(<form onSubmit = {addName}>
      <Input text={"name"} value={newName} change={handleNameChange}/>
    <br></br>
      <Input text={"number"} value={newNumber} change = {handleNumberChange} />
    <div>
      <button type="submit">add</button>
    </div>
  </form>)
  }

export default Form