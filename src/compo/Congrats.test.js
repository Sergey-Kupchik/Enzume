import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Congrats} from './Congrats';
import {findByTestAttr} from "../test/testUtils";


// set up enzume's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()})


const setup = (props={}) => {
    return shallow(<Congrats {...props}/>)
}


test('renders without crashing', () => {
    const component = findByTestAttr(setup(),"congrats-component")
    expect(component.length).toBe(1)
});

test('renders no text when "success" is false', () => {
    const component = findByTestAttr(setup({success:false}),"congrats-component")
    expect(component.length).toBe(1)
    expect(component.text()).toBe("")
});

test('renders no message when "success" is true', () => {
    const component = findByTestAttr(setup({success:true}),"congrats-message")
    expect(component.length).not.toBe(0)
    expect(component.text()).toBe("Congrats! You guessed the word")
});
