import React, {useRef, useState, useEffect} from 'react'
import './style.css'

const fieldNames = ['field1', 'field2', 'field3', 'field4']

const isInputValid = (input) => {
    const numericInput = /^[0-9]{4}$/
    return numericInput.test(input)
}

const CreditCard = () => {
    const [currentInputFilled, setCurrentInputFilled] = useState(-1)
    
    const cardInputRef = useRef(currentInputFilled);

    const handleFieldChange = (e, fieldName) => {
        const isValid = isInputValid(e.target.value)
        if (isValid) {
            setCurrentInputFilled(fieldNames.indexOf(fieldName))
        }
    }

    useEffect(() => {
        if (currentInputFilled >= 0 && currentInputFilled < (fieldNames.length - 1)) {
            cardInputRef.current.focus();  
        }     
    }, [currentInputFilled])

    return (
        <>
            <p>Please, fill in your credit card number</p>
            <div className="credit-card">
                {fieldNames.map((field, idx) => 
                    <input 
                        key={idx} 
                        type="text" 
                        name={field}
                        placeholder="XXXX" 
                        minLength={4} 
                        maxLength={4}
                        onChange={(e) => handleFieldChange(e, field)}
                        ref={idx === currentInputFilled + 1 ? cardInputRef : null} 
                    />
                )}
            </div>
        </>
    ) 
};

export default CreditCard;