import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Header from './components/header'
import Bookshelf from './components/bookshelf'
import './App.css'

const removeBook = (books, book) => {
  return books.filter(item => item.id !== book.id)
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }

    this.changeBookshelf = this.changeBookshelf.bind(this)
  }

  componentDidMount () {
    this.getAllBooks()
  }

  getAllBooks () {
    BooksAPI.getAll().then(data => {
      const currentlyReading = data.filter(
        book => book.shelf === 'currentlyReading'
      )
      const wantToRead = data.filter(book => book.shelf === 'wantToRead')
      const read = data.filter(book => book.shelf === 'read')

      this.setState({ currentlyReading, wantToRead, read })
    })
  }

  changeBookshelf (event, book) {
    const shelf = event.target.value
    this.updateBook(book, shelf).then(() => {
      this.updateStateBook(book, shelf)
    })
  }

  updateBook (book, shelf) {
    return BooksAPI.update(book, shelf)
  }

  updateStateBook (book, shelf) {
    this.setState(state => {
      const oldShelf = book.shelf
      const books = state[oldShelf]
      book.shelf = shelf

      if (shelf === 'none') {
        return { [oldShelf]: removeBook(books, book) }
      }

      return {
        [shelf]: state[shelf].concat(book),
        [oldShelf]: removeBook(books, book)
      }
    })
  }

  render () {
    return (
      <div className='app'>
        <Header />
        <div className='list-books-content'>

          <Route
            exact
            path='/'
            render={() => (
              <div>
                <Bookshelf
                  title='Currently Reading'
                  type='currentlyReading'
                  books={this.state.currentlyReading}
                  onChangeBookshelf={this.changeBookshelf}
                />
                <Bookshelf
                  title='Want To Read'
                  type='wantToRead'
                  books={this.state.wantToRead}
                  onChangeBookshelf={this.changeBookshelf}
                />
                <Bookshelf
                  title='Read'
                  type='read'
                  books={this.state.read}
                  onChangeBookshelf={this.changeBookshelf}
                />
              </div>
            )}
          />

        </div>
      </div>
    )
  }
}

export default App
