/** @format */

import React, { Component } from 'react';
import Shelf from './Shelf';
import SearchButton from '../component/SearchButtton';

export default class ShelfList extends Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {this.props.shelflist.map((i, e) => {
              console.log(i);
              return (
                <Shelf
                  key={e}
                  par={i.books}
                  title={i.title}
                  handleShelfChange={this.props.shandleShelfChange}
                />
              );
            })}{' '}
          </div>
        </div>

        <SearchButton handelsearch={this.props.handelsearch} />
      </div>
    );
  }
}
