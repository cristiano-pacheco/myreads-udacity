import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { debounce } from 'lodash'

import * as BooksAPI from './BooksAPI'
import Header from './components/header'
import Bookshelf from './components/bookshelf'
import Search from './components/search'
import Loading from './components/loading'

import './App.css'

const removeBook = (books, book) => {
  return books.filter(item => item.id !== book.id)
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: false,
      currentlyReading: [],
      wantToRead: [],
      read: [],
      books: [],
      bookshelves: [
        {
          title: 'Currently Reading',
          type: 'currentlyReading'
        },
        {
          title: 'Want To Read',
          type: 'wantToRead'
        },
        {
          title: 'Read',
          type: 'read'
        }
      ]
    }

    this.changeBookshelf = this.changeBookshelf.bind(this)
    this.onLoading = this.onLoading.bind(this)
    this.searchBooks = this.searchBooks.bind(this)
    this.searchBooksAjax = this.searchBooksAjax.bind(this)
    this.searchBooksAjax = debounce(this.searchBooksAjax, 500)
  }

  componentDidMount () {
    this.getAllBooks()
  }

  getAllBooks () {
    this.onLoading()
    BooksAPI.getAll().then(data => {
      const currentlyReading = data.filter(
        book => book.shelf === 'currentlyReading'
      )
      const wantToRead = data.filter(book => book.shelf === 'wantToRead')
      const read = data.filter(book => book.shelf === 'read')

      this.setState({ currentlyReading, wantToRead, read, isLoading: false })
    })
  }

  changeBookshelf (event, book) {
    this.onLoading()
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

      const bookshelf = {
        [shelf]: state[shelf].concat(book)
      }

      let removedBook = {}
      if (books) {
        removedBook = {
          [oldShelf]: removeBook(books, book)
        }
      }

      return { ...bookshelf, ...removedBook, isLoading: false }
    })
  }

  onLoading () {
    this.setState({ isLoading: true })
  }

  searchBooks (event) {
    const value = event.target.value
    this.onLoading()
    if (!value) {
      this.clearBooks()
      return
    }
    this.searchBooksAjax(value)
  }

  searchBooksAjax (value) {
    BooksAPI.search(value).then(data => {
      if ('error' in data) {
        this.clearBooks()
        return
      }
      this.setState({ books: data, isLoading: false })
    })
  }

  clearBooks () {
    this.setState({ books: [], isLoading: false })
  }

  render () {
    return (
      <div className='app'>
        {this.state.isLoading && <Loading />}

        <div className='list-books-content'>
          <Route
            exact
            path='/'
            render={() => (
              <div>
                <Header isLoading={this.state.isLoading} />

                {!this.state.isLoading &&
                  this.state.bookshelves.map((shelf, index) => (
                    <Bookshelf
                      key={index}
                      title={shelf.title}
                      type={shelf.type}
                      books={this.state[shelf.type]}
                      onChangeBookshelf={this.changeBookshelf}
                    />
                  ))}

                <div className='open-search'>
                  <Link to='/search'>
                    Add a book
                  </Link>
                </div>
              </div>
            )}
          />
          <Route
            path='/search'
            render={() => (
              <Search
                books={this.state.books}
                onSearchBooks={this.searchBooks}
                onChangeBookshelf={this.changeBookshelf}
              />
            )}
          />
        </div>
      </div>
    )
  }
}

export default App
