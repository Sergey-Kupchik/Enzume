import React from 'react';

type InputType = {
    secretWord: string
}

export function Input(type: InputType) {
    let [currentGuess, setCurrentGuess] = React.useState<string>('')
    // let [currentGuess, setCurrentGuess] = useState<string>('')
    return (
        <div data-test="component-input">
            <form>
                <input type="text"
                       value={currentGuess}
                       onChange={(event) => setCurrentGuess(event.target.value)}
                       data-test="input-box"/>
                <button data-test="submit-button"
                        onClick={(e) => {
                            //TODO: update currentGuess
                            //TODO: check against secretWord and update success if needed
                            setCurrentGuess('')
                        }}>Submit
                </button>
            </form>

        </div>
    )
}