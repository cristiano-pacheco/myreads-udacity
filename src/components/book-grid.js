import React from 'react'
import PropTypes from 'prop-types'

import Book from './book'

const BookGrid = ({ books, onChangeBookshelf }) => (
  <ol className='books-grid'>
    {books.map((book, index) => (
      <li key={index}>
        <Book book={book} onChangeBookshelf={onChangeBookshelf} />
      </li>
    ))}
  </ol>
)

BookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired
}

export default BookGrid
