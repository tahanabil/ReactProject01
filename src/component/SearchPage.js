/** @format */

import React, { Component } from 'react';
import { search as searchAPI } from '../BooksAPI';
//import Book from './Book';
import SearchBar from './SearchBar';
import Shelf from './Shelf';
export default class SearchPage extends Component {
  state = { SearchedBooks: [] };

  render() {
    const AddBook = this.props.AddBook;

    const currentBooks = this.props.currentBooks;
    const handleSearch = (val) => {
      const searchValue = val;
      if (searchValue !== '') {
        searchAPI(searchValue).then((books) => {
          this.setState((prv) => ({ SearchedBooks: books }));
          //   console.group('Search');
          //   console.log(books);
          //   console.groupEnd();
        });
      } else {
        this.setState((prv) => ({ SearchedBooks: [] }));
      }
    };

    const NewBookAdd = (shelfName, bookID) => {
      this.state.SearchedBooks.forEach((e) => {
        if (e.id === bookID) {
          e.shelf = shelfName;
          AddBook({ newBook: { ...e } });
        }
      });
    };

    return (
      <div className="search-books">
        <SearchBar handleSearch={handleSearch} />
        <div className="search-books-results">
          <ol className="books-grid">
            <Shelf
              key={1}
              par={this.state.SearchedBooks}
              title={'Searching...'}
              handleShelfChange={NewBookAdd}
              currentBooks={currentBooks}
            />
          </ol>
        </div>
      </div>
    );
  }
}
