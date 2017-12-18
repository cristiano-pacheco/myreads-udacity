import React from 'react'
import PropTypes from 'prop-types'

import BookGrid from './book-grid'

const Bookshelf = ({ title, type, books, onChangeBookshelf }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{title}</h2>
    <div className='bookshelf-books'>
      <BookGrid books={books} onChangeBookshelf={onChangeBookshelf} />
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
