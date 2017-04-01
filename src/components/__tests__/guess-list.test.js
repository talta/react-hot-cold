import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';

import GuessList from '../presentational/guess-list';

describe('<GuessList />', ()=>{
	it('should render without crashing', ()=>{
		shallow(<GuessList guesses={[]} />);
	});
	// it('should have the classes buessBox and clearFix', ()=>{
	// 	const wrapper = shallow(<GuessList />);
	// 	expect(wrapper.hasClass('guessBox')).to.equal(true);
	// });
	it('should list the correct guesses', ()=>{
		const values = [10, 67, 34];
		const wrapper = shallow(<GuessList guesses={values} />);
		const items = wrapper.find('li');
		expect(items.length).to.equal(values.length);
		values.forEach((value, index)=>{
			expect(items.at(index).text()).to.equal(value.toString());	
		});
	});
});