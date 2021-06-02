import React, {useState} from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Input} from './Input';
import {findByTestAttr} from '../../test/testUtils';

// set up enzume's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for tha App component
 * @function setup
 * @returns ShallowWrapper
 */

const defaultProps = {
    secretWord:"party"
}

// const mockSetCurrentGuess = jest.fn()
// jest.mock("react",()=>({
//     ...jest.requireActual("react"),
//     useState:(initialState:string)=>[initialState,mockSetCurrentGuess]
// }))
// describe('state controlled input field ', () => {
//     test('state updates with value of input box upon change', () => {
//
//         const wrapper = setup()
//         const inputBox = findByTestAttr(wrapper, 'input-box')
//
//         const mockEvent ={ target: { value: "Party" } }
//         inputBox.simulate("change", mockEvent)
//
//         expect(mockSetCurrentGuess).toHaveBeenCalledWith("Party")
//     });
// })





const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Input {...setupProps}/>)
}

describe('<Input/>', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = setup({})
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-input')
        expect(component.length).toBe(1)
    });
})

describe('state controlled input field ', () => {
    let mockSetCurrentGuess= jest.fn()
    let wrapper:any;
    let originalState:any;

    beforeEach(()=>{
        mockSetCurrentGuess.mockClear();
        originalState=React.useState;
        React.useState = jest.fn(()=>["",mockSetCurrentGuess])
        wrapper = setup()
    })
    afterEach(()=>{
        React.useState=originalState
    })
    test('state updates with value of input box upon change', () => {

        const inputBox = findByTestAttr(wrapper, 'input-box')

        const mockEvent ={ target: { value: "Party" } }
        inputBox.simulate("change", mockEvent)

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("Party")
    });
    test('field is cleared upon submit button click', () => {

        const inputBox = findByTestAttr(wrapper, 'submit-button')
        inputBox.simulate("click")

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
    });
})


