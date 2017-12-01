import React, { Component } from 'react'

import { getAll } from './BooksAPI'
import Header from './components/header'
import Book from './components/book'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  getAllBooks () {
    getAll().then(data => {
      const currentlyReading = data.filter(
        book => book.shelf === 'currentlyReading'
      )
      const wantToRead = data.filter(book => book.shelf === 'wantToRead')
      const read = data.filter(book => book.shelf === 'read')

      this.setState({ currentlyReading, wantToRead, read })
    })
  }

  componentDidMount () {
    this.getAllBooks()
  }

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
                  {this.state.currentlyReading.map((book, index) => (
                    <li key={index}>
                      <Book book={book} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Want To Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {this.state.wantToRead.map((book, index) => (
                    <li key={index}>
                      <Book book={book} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {this.state.read.map((book, index) => (
                    <li key={index}>
                      <Book book={book} />
                    </li>
                  ))}
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
