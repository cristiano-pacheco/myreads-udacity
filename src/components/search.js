import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from 'lodash'

import * as BooksAPI from '../BooksAPI'
import Book from './book'

class Search extends Component {
  constructor () {
    super()
    this.state = {
      books: []
    }

    this.searchBooks = this.searchBooks.bind(this)
    this.searchBooksAjax = this.searchBooksAjax.bind(this)
    this.searchBooksAjax = debounce(this.searchBooksAjax, 500)
  }

  searchBooks (event) {
    const value = event.target.value
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
      this.setState({ books: data })
    })
  }

  clearBooks () {
    this.setState({ books: [] })
  }

  render () {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search' />
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onKeyUp={this.searchBooks}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.books &&
              this.state.books.map((book, index) => (
                <li key={index}>
                  <Book
                    book={book}
                    onChangeBookshelf={this.props.onChangeBookshelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
