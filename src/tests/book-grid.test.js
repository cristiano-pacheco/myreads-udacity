import React from 'react'
import { shallow, mount } from 'enzyme'
import BookGrid from '../components/book-grid'
import { books, onChangeBookshelf } from './utils'

describe('<BookGrid />', () => {
  it('should renders correctly', () => {
    expect(
      shallow(<BookGrid books={books} onChangeBookshelf={onChangeBookshelf} />)
    )
  })

  it('should mount correctly', () => {
    expect(
      mount(<BookGrid books={books} onChangeBookshelf={onChangeBookshelf} />)
    )
  })

  it('should map the books correctly', () => {
    const wrapper = mount(
      <BookGrid books={books} onChangeBookshelf={onChangeBookshelf} />
    )
    expect(wrapper.find('.books-grid').length).toBe(1)
    expect(wrapper.find('ol > li').length).toBe(2)
  })
})
