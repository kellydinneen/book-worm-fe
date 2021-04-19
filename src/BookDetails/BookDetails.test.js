import React, { useState } from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import BookDetails from './BookDetails';
import testImage from '../assets/openbook.png';

describe('BookDetails', () => {

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

  const testBookMarks = [
    {
      id: 1,
      attributes: {
        data: '10-12-2020',
        minutes: 10,
        page_number: 100,
      }
    },
    {
      id: 2,
      attributes: {
        data: '10-13-2020',
        minutes: 35,
        page_number: 120,
      }
    }
  ]

  const wrapper = shallow(<BookDetails />);

  it('should update bookmark state and display bookmarks', () => {
    expect(wrapper.state('bookMarks')).toBe(null);
    wrapper.instance().setBookMarks(testBookMarks);
    expect(wrapper.state('bookMarks')).toBe(testBookMarks);
    const bookMarksDisplay = wrapper.find('.bookmarks-display')
    expect(bookMarksDisplay).toHaveLength(1 + testBookMarks.length)
  })


})
