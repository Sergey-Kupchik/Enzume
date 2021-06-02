import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {GuessedWords, GuessedWordsType} from './GuessedWords';
import {findByTestAttr} from '../../test/testUtils';

// set up enzume's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for tha App component
 * @function setup
 * @returns ShallowWrapper
 */

const defaultProps: GuessedWordsType = {
    guessedWords: [{
        guessedWord: 'train',
        letterMatchCount: 3,
    }]
}
const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
}

describe('if there are no words guessed', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = setup({guessedWords: []})
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guess-words')
        expect(component.length).toBe(1)
    });
    test('renders instructions to guess a word', () => {
        const component = findByTestAttr(wrapper, 'component-instructions')
        expect(component.length).not.toBe(0)
    })
})
describe('if there are words guessed', () => {
    let wrapper: any;
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3,},
        {guessedWord: 'agile', letterMatchCount: 1,},
        {guessedWord: 'party', letterMatchCount: 5,},
    ]
    beforeEach(() => {
        wrapper = setup({guessedWords})
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'guess-words')
        expect(component.length).toBe(1)
    });
    test('renders "guess-words" section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guess-words')
        expect(guessedWordsNode.length).toBe(1)
    })
    test('correct number of guessed words', () => {
        const guessedWordNode = findByTestAttr(wrapper, 'guess-word')
        expect(guessedWordNode.length).toBe(3)
    })
})
