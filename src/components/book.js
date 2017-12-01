import React from 'react'
import BookCover from './book-cover'
import BookShelfChanger from './book-shelf-changer'

const Book = ({ book }) => (
  <div className='book'>
    <div className='book-top'>
      <BookCover urlImage={book.imageLinks.thumbnail} />
      <BookShelfChanger />
    </div>
    <div className='book-title'>{book.title}</div>
    {book.authors.map((autor, index) => (
      <div key={index} className='book-authors'>{autor}</div>
    ))}
  </div>
)

export default Book
