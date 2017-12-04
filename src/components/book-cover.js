import React from 'react'
import PropTypes from 'prop-types'

const BookCover = ({ urlImage }) => (
  <div
    className='book-cover'
    style={{
      width: 128,
      height: 193,
      backgroundImage: `url(${urlImage})`
    }}
  />
)

BookCover.propTypes = {
  urlImage: PropTypes.string.isRequired
}

export default BookCover
