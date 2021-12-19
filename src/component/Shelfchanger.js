/** @format */

import React, { Component } from 'react';

class Shelfchanger extends Component {
  render() {
    const handleShelfChange = this.props.handleShelfChange;
    const bookID = this.props.bookID;
    const currentShelf = this.props.currentShelf;
    const ShelfChanged = (e) => {
      const newShelf = e.target.value;
      handleShelfChange(newShelf, bookID);
    };

    return (
      <div className="book-shelf-changer">
        <select
          onChange={ShelfChanged}
          defaultValue={!currentShelf ? 'none' : currentShelf}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Shelfchanger;
