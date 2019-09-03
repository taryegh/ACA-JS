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

  filterData = id => {
    const sortedBooks = this.state.books.filter(item => item.id !== id);
    this.setState({
      books: sortedBooks
    });
  };

  render() {
    return (
      <div>
        <h2>Sapkowski books</h2>
        {this.state.books.map(book => (
          <Book key={book.id} info={book} deleteItem={this.filterData} />
        ))}
      </div>
    );
  }
}
