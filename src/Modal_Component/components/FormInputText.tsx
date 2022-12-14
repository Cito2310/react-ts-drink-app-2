interface props {
    label: string,
    nameInput: string,
    onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

export const FormInputText = ({ label, value, onInputChange, nameInput }: props) => (
    <div className='form-input'>
        <label>{label}</label>
        
        <input 
            type="text" 
            name={nameInput} 
            value={value} 
            onChange={onInputChange}
        />
    </div>
)

