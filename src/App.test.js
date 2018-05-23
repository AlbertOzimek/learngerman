import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('addition', () =>{
  const wrapper = shallow(<App />);
  wrapper.find('input').simulate('change', {
    target: { value: '25+10' }
  });
  const renderResult = wrapper.find('#result').text();
  expect(renderResult).toBe('35');
});