/** @format */

import React, { Component } from 'react';

import Shelfchanger from '../component/Shelfchanger';
class Book extends Component {
  render() {
    const {
      id,
      smallThumbnail,

      authors,
      title,
      shelf,
    } = this.props.params;

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url(" ${smallThumbnail}")`,
              }}
            />
            <Shelfchanger
              handleShelfChange={this.props.handleShelfChange}
              bookID={id}
              currentShelf={shelf}
            />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </div>
    );
  }
}

export default Book;
