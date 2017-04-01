import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';

import InfoModal from '../presentational/info-modal';

describe('<InfoModal />', ()=>{
	it('should render without crashing', ()=>{
		shallow(<InfoModal />);
	});
	it('close is called when clicked', ()=>{
		const callback = jest.fn();
		const wrapper = shallow(<InfoModal onClose={callback} />);
		wrapper.update();
		wrapper.find('.close').simulate('click', {
			preventDefault() {}
		});
		expect(callback).to.have.been.called;
	});
});