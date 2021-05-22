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


test('renders without error', () => {
  const warpper = shallow(<App/>)
  const appComponent = warpper.find('[data-test="component-app"]')
  expect(appComponent.length).toBe(1)
});

test('renders increment button', () => {
  const warpper = shallow(<App/>)

});

test('renders counter dispay', () => {
    const warpper = shallow(<App/>)
  
  });

  test('counter dispay starts at 0', () => {
    const warpper = shallow(<App/>)
  
  });

  test('clicking button increments counter dispay', () => {
    const warpper = shallow(<App/>)
  
  });