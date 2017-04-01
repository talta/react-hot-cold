import React from 'react';
import {shallow, mount} from 'enzyme';

import FeedbackHeader from './feedback-header';

describe('<FeedbackHeader />', ()=>{
	it('renders without crashing', ()=>{
		shallow(<FeedbackHeader />);
	});
	it('renders the feedback id properly', ()=>{
		const wrapper = shallow(<FeedbackHeader />);
		expect(wrapper.is('#feedback')).to.equal(true);
	});
	it('should have the onGuess method', ()=>{
		const wrapper = shallow(<FeedbackHeader />);
		wrapper.instance().onGuess();
	});
});