import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', ()=>{
	it('should render without crashing', ()=>{
		shallow(<GuessList />);
	});
	it('should have the classes buessBox and clearFix', ()=>{
		const wrapper = shallow(<GuessList />);
		expect(wrapper.hasClass('guessBox clearFix')).toEqual(true);
	});
	it('should list the correct guesses', ()=>{
		const value = 10, 34, 56, 98;
		const wrapper = shallow(<GuessList />);
		expect(wrapper.text()).toEqual(`${value}`);
	});
});