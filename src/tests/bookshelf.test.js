import React from 'react'
import { shallow, mount } from 'enzyme'
import Bookshelf from '../components/bookshelf'
import { books, onChangeBookshelf } from './utils'

describe('<Bookshelf />', () => {
  it('should renders correctly', () => {
    expect(
      shallow(
        <Bookshelf
          title='read'
          type='read'
          books={books}
          onChangeBookshelf={onChangeBookshelf}
        />
      )
    )
  })

  it('should mount correctly', () => {
    expect(
      mount(
        <Bookshelf
          title='read'
          type='read'
          books={books}
          onChangeBookshelf={onChangeBookshelf}
        />
      )
    )
  })

  it('should contains all classes', () => {
    const wrapper = shallow(
      <Bookshelf
        title='read'
        type='read'
        books={books}
        onChangeBookshelf={onChangeBookshelf}
      />
    )

    expect(wrapper.find('div .bookshelf').length).toBe(1)
    expect(wrapper.find('h2 .bookshelf-title').length).toBe(1)
    expect(wrapper.find('div .bookshelf-books').length).toBe(1)
  })
})
