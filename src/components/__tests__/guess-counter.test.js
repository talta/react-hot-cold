import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCounter from './guess-counter';

describe("<GuessCounter />", ()=>{
	it('should render without crashing', ()=>{
		shallow(<GuessCounter />);
	});
	it('should have an id of count', ()=>{
		const wrapper = shallow(<GuessCounter />);
		expect(wrapper.is('#count').toEqual(true);
	});
	///it('should have value = 0 when onNewGame', ()=>{
	it('should have the correct value', ()=>{
		const value = 34;
		const wrapper = shallow(<GuessCounter />);
		expect(wrapper.text()).toEqual(`Guess #${value}!`);
	});
});