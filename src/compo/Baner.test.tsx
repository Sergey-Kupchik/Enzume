import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../App';
import {Banner} from './Baner';
import {BannerProvider, ContextType, SpaContextState, useSpaContextState,} from './BannerContext';


// set up enzume's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for tha App component
 * @function setup
 * @returns ShallowWrapper
 */
// const setup = (Component: React.FC) => shallow(<Component/>)
//
test('renders without crashing', () => {
    const context = {WitchrawaContextState: -12345, contractID: 1991};
    // const wrapper = shallow(<Banner/> , { context })
    // console.log(wrapper.debug());
});
//
// test('renders non-empty component without crashing', () => {
//     const context = {WitchrawaContextState: -12345, contractID: 1991};
//     const wrapper = shallow(<Banner/> , { context })
//     expect(wrapper.exists()).toBe(true)
// });
//
// test('should be render component with contractID data ', () => {
//     const context = {WitchrawaContextState: -12345, contractID: 1991};
//     const wrapper = shallow(<Banner/> , { context })
//     const component = wrapper.find('[data-test="WitchrawaContextState-component"]')
//     expect(component.length).toBe(1)
// });
//
// test('totalValue should be 200', () => {
//     const context = {WitchrawaContextState: 200, contractID: 1233};
//     const wrapper = shallow(<Banner/> , { context })
//     const component = wrapper.find('[data-test="WitchrawaContextState-totalValue"]')
//     expect(component.text()).toBe("2000")
// });
//
// test("enzyme contractID 232323", () => {
//     const TestComponent = () => (
//         <SpaContextState.Provider value={1221}>
//             <ContractIDContext.Provider value={232323}>
//                 <Banner/>
//             </ContractIDContext.Provider>
//         </SpaContextState.Provider>
//     );
//     const element = shallow(<TestComponent />);
//     expect(element.find(Banner)).toBe("232323");
// });

//
// test('renders increment button', () => {
//     const warpper = setup(App)
//     const button = warpper.find('[data-test="increment-button"]')
//     expect(button.length).toBe(1)
// });
//
// test('renders counter dispay', () => {
//     const warpper = shallow(<App/>)
//     const counterDispay = warpper.find('[data-test="counter-dispay"]')
//     expect(counterDispay.length).toBe(1)
// });
//
// test('counter starts at 60', () => {
//     const warpper = shallow(<App/>)
//     const counterValue = warpper.find('[data-test="counter-value"]')
//     expect(counterValue.text()).toBe('60')
// });
//
// test('clicking on button increments counter display', () => {
//     const warpper = shallow(<App/>)
//     const button = warpper.find('[data-test="increment-button"]')
//     expect(button.length).toBe(1);
//     button.simulate('click');
//     const counterValue = warpper.find('[data-test="counter-value"]')
//     expect(counterValue.text()).toBe('59')
// });

//
// const defaultProps = {
//     contractID: 'string',
//     totalValue: 2000,
//     checked: true,
//     click: () => {defaultProps.checked=false}
// }
//
//
// const newProps = {}
//
//
// const setupComp = (props = newProps) => {
//     const finalProps = {...defaultProps, ...props}
//     return <Banner {...finalProps}/>
// }
//
// test('totalValue should be 40000', () => {
//     const wrapper = mount(setupComp({totalValue: 40000}))
//     const component = wrapper.find('[data-test="totalValue"]')
//     expect(component.text()).toBe('40000')
// });
//
// test('render without crashing', () => {
//     const wrapper = mount(setupComp({}))
//     console.log(wrapper.debug())
// })
// test('render non-empty component', () => {
//     const wrapper = mount(setupComp({}))
//     expect(wrapper.exists()).toBe(true)
// })
//
// test('should be rendered TSX with contractorID and totalValue', () => {
//     const wrapper = mount(setupComp({contractID: 'Jackson', totalValue: 5000 }))
//     const component = wrapper.find('[data-test="withContractID-component"]')
//     expect(component.length).toBe(1)
// })
//
// test('should be rendered TSX with contractorID "Jackson National Life"', () => {
//     const wrapper = mount(setupComp({contractID: 'Jackson National Life' }))
//     const component = wrapper.find('[data-test="contractID"]')
//     expect(component.length).toBe(1)
//     expect(component.text()).toBe("Jackson National Life")
// })
//
// test('should be rendered TSX with totalValue 999', () => {
//     const wrapper = mount(setupComp({totalValue: 999}))
//     const component = wrapper.find('[data-test="totalValue"]')
//     expect(component.length).toBe(1)
//     expect(component.text()).toBe("999")
// })
//
// test('should be rendered TSX without any data of context', () => {
//     const wrapper = mount(setupComp({contractID: '' }))
//     const component = wrapper.find('[data-test="nodata-component"]')
//     expect(component.length).toBe(1)
//     const typographyComponent = wrapper.find('[data-test="windraft"]')
//     expect(component.text()).toBe("Windraft Found")
// })
//
// test('value of checkbox should be newsletter', () => {
//     const wrapper = mount(setupComp({}))
//     const input = wrapper.find('[data-test="checkboxD"]')
//     expect(input.length).toBe(1)
//     expect(input.prop('value')).toBe("newsletter");
// })
//
// test('checkbox should be checked', () => {
//     const wrapper = mount(setupComp({}))
//     const input = wrapper.find('[data-test="checkboxD"]')
//     expect(input.length).toBe(1)
//     expect(input.prop('checked')).toBeTruthy();
//     wrapper.find('input').at(0).simulate('change', { target: { name: 'width', value: 50 } });
// })
//
// test('callback for input should be called', () => {
//     const mockCallback = jest.fn()
//     const wrapper = mount(setupComp({click:mockCallback}))
//     const input = wrapper.find('[data-test="checkboxD"]')
//     // expect(input).toBe({Da:12})
//     input.simulate('change')
//     expect(mockCallback.mock.calls.length).toBe(1);
// })
//
// test('change checked value with callback', () => {
//     const mockCallback = jest.fn()
//     const wrapper = mount(setupComp({checked: true}))
//     const input = wrapper.find('[data-test="checkboxD"]')
//     expect(input.length).toBe(2)
//     expect(input.prop('checked')).toBeTruthy();
//     input.simulate('change')
// })
//
//
// test('link should be to "https://stackoverflow.com/"', () => {
//     const wrapper = mount(setupComp())
//     const link = wrapper.find('[data-test="link"]')
//     expect(link.length).toBe(1)
//     expect(link.prop('href')).toBe('https://stackoverflow.com/');
// })
//

// test('callback for link should be called', () => {
//     const mockCallback = jest.fn()
//     const wrapper = mount(setupComp({click:mockCallback}))
//     const input = wrapper.find('[data-test="checkboxD"]')
//     expect(input.length).toBe(1)
//     input.simulate('change')
//     expect(mockCallback.mock.calls.length).toBe(1);
// })




// describe('<Banner/>', () => {
//     test('test chould mock the context', () => {
//         const contextValues = {contractID: 'MOCK', totalValue: '2450'};
//         // @ts-ignore
//         jest.spyOn(SpaContextState,'Provider', ).mockImplementation(() => contextValues);
//         const wrapper = shallow(<Banner/>)
//         const elenemt = wrapper.find('[data-test="totalValue"]')
//         expect(elenemt.length).toBe(1)
//         expect(elenemt.text()).toBe('999')
//     })
// })

