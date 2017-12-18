import React from 'react'
import { render, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Search from '../components/search'
import { onChangeBookshelf } from './utils'

const searchBooks = () => {}

describe('<Search />', () => {
  it('should renders correctly', () => {
    expect(
      render(
        <MemoryRouter>
          <Search
            books={[]}
            onSearchBooks={searchBooks}
            onChangeBookshelf={onChangeBookshelf}
          />
        </MemoryRouter>
      )
    )
  })

  it('should mount correctly', () => {
    expect(
      mount(
        <MemoryRouter>
          <Search
            books={[]}
            onSearchBooks={searchBooks}
            onChangeBookshelf={onChangeBookshelf}
          />
        </MemoryRouter>
      )
    )
  })

  it('should mount correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Search
          books={[]}
          onSearchBooks={searchBooks}
          onChangeBookshelf={onChangeBookshelf}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('div .search-books').length).toBe(1)
    expect(wrapper.find('div .search-books-bar').length).toBe(1)
    expect(wrapper.find('a .close-search').length).toBe(1)
    expect(wrapper.find('div .search-books-input-wrapper').length).toBe(1)
    expect(wrapper.find('div .search-books-results').length).toBe(1)
  })

  it('expects searchBooks to be called on input keyUp', () => {
    const searchBooks = jest.fn()
    const wrapper = mount(
      <MemoryRouter>
        <Search
          books={[]}
          onSearchBooks={searchBooks}
          onChangeBookshelf={onChangeBookshelf}
        />
      </MemoryRouter>
    )
    wrapper.find('input').simulate('keyUp', { keyCode: 65 })
    expect(searchBooks).toHaveBeenCalledTimes(1)
  })
})
