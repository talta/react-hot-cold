import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';

import GuessCounter from '../presentational/guess-counter';

describe("<GuessCounter />", ()=>{
	it('should render without crashing', ()=>{
		shallow(<GuessCounter />);
	});
	///it('should have value = 0 when onNewGame', ()=>{
	it('should have the correct value', ()=>{
		const value = 34;
		const wrapper = shallow(<GuessCounter count={value} />);
		expect(wrapper.text()).to.equal(`Guess #${value}!`);
	});
});