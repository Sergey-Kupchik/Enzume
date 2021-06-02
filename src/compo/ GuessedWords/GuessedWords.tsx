import React from 'react';

// type GuessedWordsPropsType = GuessedWordType[]
export type GuessedWordsType = {
    guessedWords: GuessedWordType[]
}

export type GuessedWordType = {
    guessedWord: string,
    letterMatchCount: number
}


export function GuessedWords(props: GuessedWordsType) {
    let contents;
    if (props.guessedWords.length === 0) {
        return <div data-test="component-guess-words">
            <span data-test="component-instructions"></span>
            Try to guess the secret word!
        </div>
    } else {
        const guessedWordsRows = props.guessedWords.map((e, i) => (
            <tr key={i} data-test="guess-word">
                <td> {e.guessedWord}</td>
                <td>{e.letterMatchCount}</td>
            </tr>))

        return (
            <div data-test="guess-words">
                <h3> Guessed Words</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Guess</th>
                        <th>Matching Letters</th>
                    </tr>
                    </thead>
                    <tbody>
                    {guessedWordsRows}
                    </tbody>
                </table>


            </div>
        )
    }
}