import React from 'react'
import PropTypes from 'prop-types'

import BookCover from './book-cover'
import BookshelfChanger from './bookshelf-changer'

const Book = ({ book, defaultItem, onChangeBookshelf }) => (
  <div className='book'>
    <div className='book-top'>
      <BookCover urlImage={book.imageLinks.thumbnail} />
      <BookshelfChanger
        defaultItem={defaultItem}
        onChangeBookshelf={e => onChangeBookshelf(e, book)}
      />
    </div>
    <div className='book-title'>{book.title}</div>
    {book.authors.map((autor, index) => (
      <div key={index} className='book-authors'>{autor}</div>
    ))}
  </div>
)

Book.propTypes = {
  book: PropTypes.object.isRequired,
  defaultItem: PropTypes.string.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired
}

export default Book
