import React from 'react'
import { shallow, mount } from 'enzyme'
import Bookshelf from '../components/bookshelf'

const books = [
  {
    allowAnonLogging: true,
    authors: ['William E. Shotts, Jr.', 'Author 2', 'Author 3'],
    id: 'nggnmAEACAAJ',
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    },
    shelf: 'currentlyReading',
    subtitle: 'A Complete Introduction',
    title: 'The Linux Command Line'
  },
  {
    allowAnonLogging: true,
    authors: ['William E. Shotts, Jr.', 'Author 2', 'Author 3'],
    id: 'nggnmAEACAAJ',
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    },
    shelf: 'currentlyReading',
    subtitle: 'A Complete Introduction',
    title: 'The Linux Command Line'
  }
]

const changeBookshelf = () => {}

describe('<Bookshelf />', () => {
  it('should renders correctly', () => {
    expect(
      shallow(
        <Bookshelf
          title='read'
          type='read'
          books={books}
          onChangeBookshelf={changeBookshelf}
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
          onChangeBookshelf={changeBookshelf}
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
        onChangeBookshelf={changeBookshelf}
      />
    )

    expect(wrapper.find('div .bookshelf').length).toBe(1)
    expect(wrapper.find('h2 .bookshelf-title').length).toBe(1)
    expect(wrapper.find('div .bookshelf-books').length).toBe(1)
    expect(wrapper.find('ol .books-grid').length).toBe(1)
  })

  it('should map books correctly', () => {
    const wrapper = shallow(
      <Bookshelf
        title='read'
        type='read'
        books={books}
        onChangeBookshelf={changeBookshelf}
      />
    )
    expect(wrapper.find('li').length).toBe(2)
    expect(wrapper.find('Book').length).toBe(2)
  })
})
