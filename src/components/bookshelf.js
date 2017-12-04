import React from 'react'
import PropTypes from 'prop-types'

import Book from './book'

const Bookshelf = ({ title, type, books, onChangeBookshelf }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {books.map((book, index) => (
          <li key={index}>
            <Book
              book={book}
              defaultItem={type}
              onChangeBookshelf={onChangeBookshelf}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired
}

export default Bookshelf
