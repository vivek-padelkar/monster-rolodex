import './input-field.css'

const InputField = ({ placeholder, handleClick }) => {
  return (
    <input
      className="inputField"
      type="search"
      placeholder={placeholder}
      onChange={handleClick}
    />
  )
}

export default InputField
