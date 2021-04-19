import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render site title', () => {
    const wrapper = shallow(<Header />)
    const title = wrapper.find('h1')
    expect(title.text()).toEqual('BookWorm')
  })

  it('should render greeting', () => {
    const wrapper = shallow(<Header />)
    const greeting = wrapper.find('h2')
    expect(greeting.text()).toEqual('Hi, Student')
  })
})
