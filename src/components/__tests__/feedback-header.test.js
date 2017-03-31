import React from 'react';
import {shallow, mount} from 'enzyme';

import FeedbackHeader from './feedback-header';

describe('<FeedbackHeader />', ()=>{
	it('renders without crashing', ()=>{
		shallow(<FeedbackHeader />);
	});

});