import React, { Component } from 'react'

import { getAll } from './BooksAPI'
import Header from './components/header'
import Bookshelf from './components/bookshelf'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
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
            <Bookshelf
              title='Currently Reading'
              type='currentlyReading'
              books={this.state.currentlyReading}
            />
            <Bookshelf
              title='Want To Read'
              type='wantToRead'
              books={this.state.wantToRead}
            />
            <Bookshelf title='Read' type='read' books={this.state.read} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
