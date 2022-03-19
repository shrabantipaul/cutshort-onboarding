
const Input = ({ label, value, name, placeholder, onInputChange }) => {
    return (
        <div className='input-wrap'>
            <label>{label}</label>

            <input className="text-input" type="text" autoComplete="off" placeholder={placeholder} name={name}
                defaultValue={value}
                onChange={(e) => onInputChange(e.target.value)} />
        </div>
    )
}

export default Input
