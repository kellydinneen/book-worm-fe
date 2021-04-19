import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import NewBookForm from './NewBookForm';

describe('NewBookForm', () => {
  const wrapper = shallow(<NewBookForm />);

  it('should render form with two inputs and a button', () => {
    expect(wrapper.find('form')).toHaveLength(3);
  })

})
