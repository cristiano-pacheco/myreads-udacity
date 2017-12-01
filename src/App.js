import React, { Component } from 'react'

import Header from './components/header'
import Book from './components/book'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <div className='list-books-content'>
          <div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Currently Reading</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  <li>
                    <Book />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
