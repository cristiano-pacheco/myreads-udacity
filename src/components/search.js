import React from 'react'
import { Link } from 'react-router-dom'
import Book from './book'

const Search = ({ books, onSearchBooks, onChangeBookshelf }) => (
  <div className='search-books'>
    <div className='search-books-bar'>
      <Link to='/' className='close-search' />
      <div className='search-books-input-wrapper'>
        <input
          type='text'
          placeholder='Search by title or author'
          onKeyUp={onSearchBooks}
        />
      </div>
    </div>
    <div className='search-books-results'>
      <ol className='books-grid'>
        {books &&
          books.map((book, index) => (
            <li key={index}>
              <Book book={book} onChangeBookshelf={onChangeBookshelf} />
            </li>
          ))}
      </ol>
    </div>
  </div>
)

export default Search
