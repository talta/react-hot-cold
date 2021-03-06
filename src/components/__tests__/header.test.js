import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';

import Header from '../presentational/header';

describe('<Header />', ()=>{
	it('should render without crashing', ()=>{
		shallow(<Header />);
	});
	it('should have the methods for toggle modal', ()=>{
		const wrapper = shallow(<Header />);
		wrapper.instance().toggleModal(true);
	});
	it('should initially hide the info modal', ()=>{
		const wrapper = shallow(<Header />);
		expect(wrapper.find('InfoModal').exists()).to.equal(false);
	});
});