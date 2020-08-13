import React from 'react';
import { mount, shallow } from 'enzyme';
import Filters from '../container/Homepage/Filters';


let selectedFilters = {}

const onChangeFilters = () => {

}

describe('Renders Filters Component', () => {
    let wrapper = shallow(<Filters onChangeFilters={onChangeFilters} selectedFilters={selectedFilters || {}} />);

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render div', () => {
        expect(wrapper.find(".filters-section").length).toBe(1);
    });


    it('should render div', () => {
        expect(wrapper.find(".filters-section").length).toBe(1);
    });
    
});
