import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { debounce } from 'lodash'

import * as BooksAPI from './BooksAPI'
import Header from './components/header'
import Bookshelf from './components/bookshelf'
import Search from './components/search'
import Loading from './components/loading'

import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: false,
      hideBooks: true,
      books: [],
      booksSearched: [],
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
    this.onClickClose = this.onClickClose.bind(this)
  }

  componentDidMount () {
    this.getAllBooks()
  }

  getAllBooks () {
    this.onLoading()
    BooksAPI.getAll().then(books => {
      this.setState({ books, booksSearched: [], isLoading: false })
    })
  }

  changeBookshelf (event, book) {
    this.onLoading()
    const shelf = event.target.value
    this.updateBook(book, shelf).then(() => {
      this.updateStateBook(book, shelf)
      this.updateStateBookSearched(book, shelf)
    })
  }

  updateBook (book, shelf) {
    return BooksAPI.update(book, shelf)
  }

  updateStateBook (bookUpdate, shelf) {
    const books = this.state.books.map(book => {
      if (book.id === bookUpdate.id) {
        return { ...book, shelf }
      }
      return book
    })

    this.setState({
      books,
      isLoading: false
    })
  }

  updateStateBookSearched (bookUpdate, shelf) {
    if (this.state.booksSearched.length) {
      const booksSearched = this.state.booksSearched.map(book => {
        if (book.id === bookUpdate.id) {
          return { ...book, shelf }
        }
        return book
      })

      this.setState({
        booksSearched,
        isLoading: false
      })
    }
  }

  onLoading () {
    this.setState({ isLoading: true })
  }

  searchBooks (event) {
    const value = event.target.value
    if (!value) {
      this.setState({ hideBooks: true, isLoading: false })
      return
    }
    this.searchBooksAjax(value)
  }

  searchBooksAjax (value) {
    this.onLoading()
    BooksAPI.search(value)
      .then(books => {
        if ('error' in books) {
          this.setState({ hideBooks: true, isLoading: false })
          return
        }
        const booksSearched = books.map(book => {
          const bookInState = this.findBookInState(book)
          if (bookInState) {
            return { ...bookInState }
          }
          return book
        })
        this.setState({
          booksSearched,
          isLoading: false,
          hideBooks: false
        })
      })
  }

  findBookInState (book) {
    return this.state.books.find(b => b.id === book.id)
  }

  onClickClose () {
    this.getAllBooks()
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
                      books={this.state.books.filter(book => {
                        return book.shelf === shelf.type
                      })}
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
                books={this.state.booksSearched}
                onSearchBooks={this.searchBooks}
                onChangeBookshelf={this.changeBookshelf}
                hideBooks={this.state.hideBooks}
                onClickClose={this.onClickClose}
              />
            )}
          />
        </div>
      </div>
    )
  }
}

export default App
