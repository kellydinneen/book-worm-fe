import React, { useState } from 'react';
import Enzyme, { shallow } from 'enzyme';
import FinishBookForm from './FinishBookForm';
import testImage from '../assets/openbook.png';

describe('FinishBookForm', () => {

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


  const wrapper = shallow(<FinishBookForm book={testBook}/>);

  it('should render form with two labeled inputs and a button', () => {
    const form = wrapper.find('form')
    expect(form).toHaveLength(5)
  })

})
