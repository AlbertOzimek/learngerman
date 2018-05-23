import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should translate a text from english to german', function () {
    wrapper.find('textarea').simulate('change', {
        target: { value: 'der Hund' }
    });
    const renderResult = wrapper.find('#result').text();
    expect(renderResult).toBe('dog');
});