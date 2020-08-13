import React from 'react';
import { shallow } from 'enzyme';
import { Subfilters } from '../components';


let selectedFilters = {};
let type = "";
let title = "";
let itemsArr = [];
const onChangeFilters = () => {

}

describe('Renders SubFilters Component', () => {
    let wrapper = shallow(<Subfilters
        title={title}
        itemsArr={itemsArr}
        onChangeFilters={onChangeFilters}
        type={type}
        selectedFilters={selectedFilters}
    />);

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render div', () => {
        expect(wrapper.find(".sub-filters-heading").length).toBe(1);
    });

    it('should render div with 0 length', () => {
        expect(wrapper.find(".sub-filters-button-section").length).toBe(0);
    });

    it('should render div with 1 length', () => {
        wrapper = shallow(<Subfilters
            title={title}
            itemsArr={[2006]}
            onChangeFilters={onChangeFilters}
            type={type}
            selectedFilters={selectedFilters}
        />);
        expect(wrapper.find(".sub-filters-button-section").length).toBe(1);
    });

    it('should render div with 1 length', () => {
        const onChange = jest.fn();
        wrapper = shallow(<Subfilters
            title={title}
            itemsArr={[2006]}
            onChangeFilters={onChange}
            type={type}
            selectedFilters={selectedFilters}
        />);
        const btn = wrapper.find("button")

        btn.simulate('click');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(2006, type);
    });

});
