import React from 'react';
import {shallow, mount} from 'enzyme';

import Form from './form';

describe('<Form />', ()=>{
	it('renders the form component wihtout crashing', ()=>{
		shallow(<Form />);
	});
	it('renders the form', ()=>{
		const wrapper= shallow(<Form />);
		expect(wrapper.hasClass('formArea')).toEqual(true);
	});
	it('should fire the onGuess callback when clicked', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<Form onGuess={callback} />);
		const value = 10;
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value);
	});
	it('should not fire onGuess is the input is empty', (){
		const callback = jest.fn();
		const wrapper = mount(<Form onGuess={callback} />);
		const value = '';
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).not.toHaveBeenCalledWith(value);
	});
	it('should not fire onGuess if the input is <1', ()=>{
		const callback= jest.fn();
		const wrapper = mount(<Form onGuess={callback} />);
		const value = 0;
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).not.toHaveBeenCalledWith(value);
	})
	it('should not fire onGuess if the input length>2', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<Form onGuess={callback} />);
		const value = 100;
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).not.toHaveBeenCalledWith(value);
	});
});
