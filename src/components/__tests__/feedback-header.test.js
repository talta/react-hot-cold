import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';

import FeedbackHeader from '../presentational/feedback-header';

describe('<FeedbackHeader />', ()=>{
	it('renders without crashing', ()=>{
		shallow(<FeedbackHeader />);
	});
	it('does not render the feedback id on initial load', ()=>{
		const wrapper = shallow(<FeedbackHeader />);
		expect(wrapper.is('#feedback')).to.equal(false);
	});
	it('renders feedback', ()=>{
		const feedback = 'this is an example';
		const wrapper  = shallow(<FeedbackHeader feedback={feedback}/>);
		expect(wrapper.contains(feedback)).to.equal(true);
	});
});
