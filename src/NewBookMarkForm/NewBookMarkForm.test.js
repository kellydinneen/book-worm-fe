import React, { useState } from 'react';
import Enzyme, { shallow } from 'enzyme';
import NewBookMarkForm from './NewBookMarkForm';

describe('NewBookMarkForm', () => {

  const testBook = {
    id: 1,
    attributes: {
      title: 'test book',
      author: 'test author',
      pages: 100,
      isbn: '12345',
      image: testImage
    }
  }


  const wrapper = shallow(<NewBookMarkForm book={testBook}/>);

  it('should render form with 5 labeled inputs and a button', () => {
    const form = wrapper.find('form')
    expect(form).toHaveLength(11)
  })

})
