import React from 'react'
import { shallow, mount } from 'enzyme'
import BookCover from '../components/book-cover'

describe('<BookCover />', () => {
  it('should render <BookCover />', () => {
    expect(shallow(<BookCover urlImage='' />))
  })

  it('should render <BookCover /> correctly', () => {
    const wrapper = shallow(<BookCover urlImage='url' />)
    expect(wrapper.find('.book-cover').length).toBe(1)
  })

  it('should mount <BookCover /> correctly', () => {
    const wrapper = mount(<BookCover urlImage='url' />)
    expect(wrapper.find('.book-cover').length).toBe(1)
  })
})
