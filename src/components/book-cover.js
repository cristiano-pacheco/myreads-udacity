import React from 'react'

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

export default BookCover
