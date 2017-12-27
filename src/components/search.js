import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookGrid from './book-grid'

const Search = ({
  books,
  onSearchBooks,
  onChangeBookshelf,
  hideBooks,
  onClickClose
  }) => (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search' onClick={onClickClose} />
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            onKeyUp={onSearchBooks}
        />
        </div>
      </div>
      <div className='search-books-results'>
        {!hideBooks &&
        <BookGrid
          books={books}
          onChangeBookshelf={onChangeBookshelf}
        />
      }
      </div>
    </div>
)

Search.propTypes = {
  books: PropTypes.array.isRequired,
  onSearchBooks: PropTypes.func.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired,
  hideBooks: PropTypes.bool.isRequired
}

export default Search
