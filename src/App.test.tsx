import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';


Enzyme.configure({adapter: new EnzymeAdapter()})
test('renders without crashing', () => {
  const warpper = shallow(<App/>)
  console.log(warpper.debug());
});

test('renders non-empty component without crashing', () => {
  const warpper = shallow(<App/>)
 expect(warpper.exists()).toBe(true)
});