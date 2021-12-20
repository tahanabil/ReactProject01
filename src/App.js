/** @format */

import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { getAll, update as updateBookAPI } from './BooksAPI';

// import Shelf from '../src/component/Shelf';
// import SearchButton from '../src/component/SearchButtton';
import SearchPage from '../src/component/SearchPage';
import { Route, Routes } from 'react-router-dom';
import ShelfList from './component/ShelfList';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const books = await getAll();
    this.setState({ books: books });
  }

  render() {
    const booklist = this.state.books;

    const AddBook = (newbook) => {
      const newBookID = newbook.newBook.id;
      const IsBookExists = this.state.books.filter((x) => x.id === newBookID);

      console.log('IsBookExists (AddBook): ', IsBookExists);
      if (IsBookExists.length > 0) {
        const newShelf = newbook.newBook.shelf;
        handleShelfChange(newShelf, newBookID);
      } else {
        this.setState((prv) => {
          let books = [...prv.books, newbook.newBook];
          return { books };
        });
        // console.log('newbook :', newbook);
        // console.log('ID :', newbook.newBook.id);
        // console.log('shelf :', newbook.newBook.shelf);
      }

      updateBookAPI({ id: newbook.newBook.id }, newbook.newBook.shelf).then(
        (books) => {
          console.log(books);
        }
      );

      // console.clear();
      // console.log('New book :', newbook);
      // console.log('State book :', this.state);
    };

    const handleShelfChange = (newShelf, bookID) => {
      const newState = { books: [...this.state.books] };
      console.log('New state : ', newState);

      newState.books.forEach((x) => {
        if (x.id === bookID) {
          x.shelf = newShelf;
          //    console.log(this.state.books);
        }
      });

      this.setState((ps) => newState);

      updateBookAPI({ id: bookID }, newShelf).then((books) => {
        console.log(books);
      });
    };

    const currentlyReading = booklist.filter(
      (x) => x.shelf === 'currentlyReading'
    );
    const wantToRead = booklist.filter((x) => x.shelf === 'wantToRead');
    const read = booklist.filter((x) => x.shelf === 'read');

    const shelflist = [
      { title: 'Currently Reading', books: currentlyReading },
      { title: 'Want to Read', books: wantToRead },
      { title: 'Read', books: read },
    ];

    const currentBooks = this.state.books.map((x) => ({
      id: x.id,
      shelf: x.shelf,
    }));
    return (
      <div className="app">
        <Routes>
          <Route
            element={
              <SearchPage AddBook={AddBook} currentBooks={currentBooks} />
            }
            path="/search"
          />

          <Route
            path="/"
            element={
              <ShelfList
                shelflist={shelflist}
                shandleShelfChange={handleShelfChange}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
