import React, { useState } from 'react';
import Enzyme, { shallow } from 'enzyme';
import StarRating from './StarRating';

describe('StarRating', () => {

  const wrapper = shallow(<StarRating totalStars={5}/>);

  it('should update rating state', () => {
    expect(wrapper.state('rating')).toBe(0);
    wrapper.instance().setRating(4);
    expect(wrapper.state('rating')).toBe(4);
  })

  it('should update selection state on hover', () => {
    expect(wrapper.state('selection')).toBe(0);
    wrapper.instance().hoverOver({target: <span data-star-id="1"></span>});
    expect(wrapper.state('selection')).toBe(1);
  })

})
