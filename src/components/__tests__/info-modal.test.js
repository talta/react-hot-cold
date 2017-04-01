import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', ()=>{
	it('should render without crashing', ()=>{
		shallow(<InfoModal />);
	});
	it('should have the method for onClose', ()=>{
		const wrapper = shallow(<InfoModal />);
		wrapper.instance().onClose(true);
	});
	it('should have a classname of close', ()=>{
		const wrapper = shallow(<InfoModal />);
		expect(wrapper.hasClass('close')).toEqual(true);
	});
	////it('should not render when the close method is selected', ()=>{
/////i am unsure how to do this through enzyme 
	///});
});