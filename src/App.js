import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkList from './BookmarkList/BookmarkList';
import BookmarksContext from './BookmarksContext';
import Nav from './Nav/Nav';
import config from './config';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
<<<<<<< HEAD
    bookmarks: [],
=======
    bookmarks,
>>>>>>> master
    error: null,
  };

  setBookmarks = bookmarks => {
    this.setState({
      bookmarks,
      error: null,
    })
  }

  addBookmark = bookmark => {
    this.setState({
      bookmarks: [ ...this.state.bookmarks, bookmark ],
    })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setBookmarks)
      .catch(error => this.setState({ error }))
  }

  render() {
<<<<<<< HEAD
    const contextValue = {
      bookmarks: this.state.bookmarks,
      addBookmark: this.addBookmark,
    }
    return (
      <main className='App'>
        <h1>Bookmarks!</h1>
        <BookmarksContext.Provider value={contextValue}>
          <Nav />
          <div className='content' aria-live='polite'>
            <Route
              path='/add-bookmark'
              component={AddBookmark}
            />
            <Route
              exact
              path='/'
              component={BookmarkList}
            />
          </div>
        </BookmarksContext.Provider>
=======
    const { bookmarks } = this.state
    return (
      <main className='App'>
        <h1>Bookmarks!</h1>
        <Nav />
        <div className='content' aria-live='polite'>
        
          
          <Route
            path='/add-bookmark'
            render={({ history }) => {
                          console.log(history)
                          return <AddBookmark
                            onAddBookmark={this.addBookmark}
                            onClickCancel={() => history.push('/')}
                            />
                          }}
          />
          
          <Route
            exact path='/'
           render={() =>
              <BookmarkList
                bookmarks={bookmarks}
              />}
          />
      
        </div>
>>>>>>> master
      </main>
    );
  }
}

export default App;
