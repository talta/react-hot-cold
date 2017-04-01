import React from 'react';
import {shallow, mount} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import App from '../../App.js'

describe('<App />', ()=>{
	it('should render without crashing', ()=>{
		shallow(<App />);
	});
	it('should have a method for newGame', ()=>{
		const wrapper = shallow(<App />);
		wrapper.instance().newGame(true);
	});
	it('should have a method for guess', ()=>{
		const wrapper = shallow(<App />);
		wrapper.instance().guess(true);
	});
});