/** @format */

import React, { Component } from 'react';
import Book from '../component/Book';

export default class Shelf extends Component {
  render() {
    var booklist = this.props.par;
    var title = this.props.title;
    var currentBooks = this.props.currentBooks;

    // console.log(booklist);
    // console.log(title);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booklist != null && booklist.length > 0
              ? booklist.map((x) => {
                  // console.log('currentBook :', currentBooks);

                  const IsExists = currentBooks
                    ? currentBooks.filter((y) => y.id === x.id)
                    : null;
                  //  console.log('isExists :', IsExists.length == 0);

                  if (IsExists && IsExists.length !== 0) {
                    x.shelf = IsExists[0].shelf;
                    // console.log('Shelf :', IsExists[0].shelf);
                  }

                  if (!x.imageLinks) {
                    x.imageLinks = { smallThumbnail: '', thumbnail: '' };
                    // console.log('Correcetd object :', x);
                  }
                  if (!x.imageLinks.smallThumbnail) {
                    x.imageLinks.smallThumbnail =
                      'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
                  }
                  if (!x.imageLinks.thumbnail) {
                    x.imageLinks.smallThumbnail =
                      'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
                  }
                  let ar = {};

                  try {
                    ar = {
                      id: x.id,
                      smallThumbnail: x.imageLinks.smallThumbnail,
                      thumbnail: x.imageLinks.thumbnail,
                      authors: x.authors,
                      title: x.title,
                      shelf: x.shelf,
                    };
                  } catch (error) {
                    // console.log('Wrong object :', x);
                    ar = {
                      id: x.id,
                      smallThumbnail: '',
                      thumbnail: '',
                      authors: x.authors,
                      title: x.title,
                      shelf: x.shelf,
                    };
                  }

                  return (
                    <li key={ar.id}>
                      <Book
                        params={ar}
                        handleShelfChange={this.props.handleShelfChange}
                      />
                    </li>
                  );
                })
              : 'No Books available.'}
          </ol>
        </div>
      </div>
    );
  }
}
