import React from 'react';
import {shallow, mount} from 'enzyme';

import Form from './form';

describe('<Form />', ()=>{
	it('renders the form component wihtout crashing', ()=>{
		shallow(<Form />);
	})
})