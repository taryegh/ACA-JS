import React, { Component } from "react";
import Book from "./Book";
import booksData from "./data";

export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData
    };
  }

  handleClick = () => {
    console.log(`I am info from parent container`);
  };

  render() {
    return (
      <div>
        <h2>Some books</h2>
        {this.state.books.map(book => (
          <Book key={book.id} info={book} handleClick={this.handleClick} />
        ))}
      </div>
    );
  }
}
