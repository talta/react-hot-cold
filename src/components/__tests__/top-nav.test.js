import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';
import {jasmineEnzyme} from 'jasmine-enzyme';

import TopNav from '../presentational/top-nav';

describe('<TopNav />', ()=>{
	it('should render without crashing', ()=>{
		shallow(<TopNav />);
	});
	it('should all newgame when clicked', ()=>{
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onNewGame={callback} />);
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled;
	});
	it('should show info on click of onInfo', ()=>{
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onInfo={callback} />);
		const link = wrapper.find('.what');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callback).to.have.been.called;
	});
});