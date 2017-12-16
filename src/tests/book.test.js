import React from 'react'
import { shallow, mount } from 'enzyme'
import Book from '../components/book'

describe('<Book />', () => {
  const book = {
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

  it('should renders correctly', () => {
    expect(shallow(<Book book={book} onChangeBookshelf={() => {}} />))
  })

  it('should mount correctly', () => {
    expect(mount(<Book book={book} onChangeBookshelf={() => {}} />))
  })

  it('should contains all correct classes', () => {
    const wrapper = shallow(<Book book={book} onChangeBookshelf={() => {}} />)
    expect(wrapper.find('.book').length).toBe(1)
    expect(wrapper.find('.book-top').length).toBe(1)
    expect(wrapper.find('.book-title').length).toBe(1)
    expect(wrapper.find('.book-authors').length).toBe(3)
  })

  it('should mount the child components', () => {
    const wrapper = mount(<Book book={book} onChangeBookshelf={() => {}} />)
    expect(wrapper.find('BookCover').length).toBe(1)
    expect(wrapper.find('BookshelfChanger').length).toBe(1)
  })
})
