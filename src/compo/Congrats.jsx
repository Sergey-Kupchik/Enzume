import React, {MouseEvent, ChangeEvent, useState, useContext} from 'react';


export function Congrats({success}) {
    if (success) {
        return <div data-test="congrats-component">
            <span data-test="congrats-message">Congrats! You guessed the word</span>
        </div>
    } else {
        return <div data-test="congrats-component"></div>
    }
}