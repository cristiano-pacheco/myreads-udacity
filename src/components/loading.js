import React from 'react'
import loading from '../loading.gif'

const Loading = ({ isLoading }) => (
  <div className='loading'>
    <img src={loading} alt='loading...' />
  </div>
)

export default Loading
