import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';
import {jasminenzyme} from 'jasmine-enzyme';

import Form from '../presentational/form';

describe('<Form />', ()=>{
	it('renders the form component wihtout crashing', ()=>{
		shallow(<Form />);
	});
	it('renders the form with a formArea class', ()=>{
		const wrapper= shallow(<Form />);
		expect(wrapper.hasClass('formArea')).to.equal(true);
	});
    it('Should fire the onGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<Form onGuess={callback} />);
        const value = 10;
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });
	it('should not fire onGuess is the input is empty', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<Form onGuess={callback} />);
		const value = '';
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).not.toHaveBeenCalled;
	});
	it('should not fire onGuess if the input is <1', ()=>{
		const callback= jest.fn();
		const wrapper = mount(<Form onGuess={callback} />);
		const value = 0;
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).not.toHaveBeenCalled;
	})
	it('should not fire onGuess if the input length>2', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<Form onGuess={callback} />);
		const value = 100;
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).not.toHaveBeenCalled;
	});
});
