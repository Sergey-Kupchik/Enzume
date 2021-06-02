import React from 'react';
import { Congrats } from '../Congrats';
import {GuessedWords, GuessedWordType} from './GuessedWords';

export function App2() {
    const successValue = true

    return(
        <div>
            <h1>Jotto</h1>
            <Congrats success={successValue}/>
            <GuessedWords guessedWords={[{guessedWord:"train", letterMatchCount: 5}]}/>
        </div>
    )

}