const Input = ({text, value, change}) => {
    return(<div>
      {text}: <input value={value}
              onChange = {change}/>
    </div>)
  }

  export default Input