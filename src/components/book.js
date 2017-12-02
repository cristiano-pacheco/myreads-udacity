import React from 'react'
import BookCover from './book-cover'
import BookshelfChanger from './bookshelf-changer'

const Book = ({ book, defaultItem }) => (
  <div className='book'>
    <div className='book-top'>
      <BookCover urlImage={book.imageLinks.thumbnail} />
      <BookshelfChanger defaultItem={defaultItem} />
    </div>
    <div className='book-title'>{book.title}</div>
    {book.authors.map((autor, index) => (
      <div key={index} className='book-authors'>{autor}</div>
    ))}
  </div>
)

export default Book
