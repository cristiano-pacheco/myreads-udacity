import React from 'react'

const BookshelfChanger = ({ defaultItem, onChangeBookshelf }) => (
  <div className='book-shelf-changer'>
    <select value={defaultItem || 'none'} onChange={onChangeBookshelf}>
      <option value='none' disabled>Move to...</option>
      <option value='currentlyReading'>
        Currently Reading
      </option>
      <option value='wantToRead'>Want to Read</option>
      <option value='read'>Read</option>
      <option value='none'>None</option>
    </select>
  </div>
)

export default BookshelfChanger
