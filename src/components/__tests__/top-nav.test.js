import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', ()=>{
	it('should render without crashing', ()=>{
		shallow(<TopNav />);
	});
	it('should have the method for onInfo', ()=>{
		const wrapper = shallow(<TopNav />);
		wrapper.instance().onInfo(true);
	});
	it('should have the method for onNewGame', ()=>{
		const wrapper = shallow(<TopNav />);
		wrapper.instance().onNewGame(true);
	});
	it('onInfo should have a classname of what', ()=>{
		const wrapper = shallow(<TopNav />);
		expect(wrapper.hasClass('what')).toExist(true);
	});
	it('onNewGame should have a classname of new', ()=>{
		const wrapper = shallow(<TopNav />);
		expect(wrapper.hasClass('new')).toExist(true);
	});
	it('should all newgame when clicked', ()=>{
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onNewGame={callback} />);
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault(){}
		});
		expect(callback).toHaveBeenCalled();
	});
	it('should show info on click of onInfo', ()=>{
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onInfo={callback} />);
		const link = wrapper.find('.what');
		link.simulate('click', {
			preventDefault(){}
		});
		expect(callback).toHaveBeenCalled();
	});
});