import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCounter from './guess-counter';

describe("<GuessCounter />", ()=>{
	it('should render without crashing', ()=>{
		shallow(<GuessCounter />);
	});
});