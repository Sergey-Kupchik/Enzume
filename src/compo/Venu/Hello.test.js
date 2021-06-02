import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {SpaContextState} from '../BannerContext';
import * as VenuContext from './VenuContext';
import Hello from "./Hello";
import Venu from "./Venu";

Enzyme.configure({adapter: new EnzymeAdapter()})

describe('<Hello/>', () => {
    test('test should mock the context', () => {
        const contextValues = {color: 'orange',};
        jest
            .spyOn(VenuContext,"useVenuContext", )
            .mockImplementation(() => contextValues);
        const wrapper = shallow(<Hello/>)
        const h1 = wrapper.find('h1')
        expect(h1.text()).toBe(" Hello orange")
    })
})

