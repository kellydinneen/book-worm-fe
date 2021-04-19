import React, { useState } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Card from './Card';
import testImage from '../assets/openbook.png';

describe('Card', () => {

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

  const wrapper = shallow(<Card book={testBook} key='1'/>);

  it('should render the book title', () => {
    const title = wrapper.find('h2')
    expect(title.text()).toEqual(testBook.attributes.title)
  })

  it('updates state with prediction', () => {
    expect(wrapper.state('prediction')).toBe('');
    wrapper.instance().setPrediction('test prediction');
    expect(wrapper.state('prediction')).toBe('test prediction');
  });

})
