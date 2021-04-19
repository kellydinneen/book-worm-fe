import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('should render mountain landscape', () => {
    expect(wrapper.find('.navigation-wrapper')).toHaveLength(5);
  })

})
