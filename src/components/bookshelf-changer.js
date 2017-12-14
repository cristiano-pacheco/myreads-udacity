import React from 'react'
import PropTypes from 'prop-types'

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

BookshelfChanger.propTypes = {
  defaultItem: PropTypes.string,
  onChangeBookshelf: PropTypes.func.isRequired
}

export default BookshelfChanger
