/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SearchBar extends Component {
  state = { searchText: '' };

  render() {
    const handleSearch = (e) => {
      let val = e.target.value;
      this.setState((prv) => ({ searchText: val }));
      //   console.group('Search text');
      //   console.log(val);
      //   console.groupEnd();
      this.props.handleSearch(val);
    };

    //  const CloseSearch = this.props.CloseSearch;
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button
            className="close-search"
            onClick={() => this.props.CloseSearch(false)}
          >
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.searchText}
            onChange={handleSearch}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
