import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      showInfo: false
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, img, title, author } = this.props.info;
    const { deleteItem } = this.props;

    return (
      <div className="book">
        <img src={img} width="150px" alt="" />
        <div>
          <h4>TITLE: {title}</h4>
          <h6>BY: {author}</h6>
          <button onClick={() => deleteItem(id)}>delete item</button>
          <button onClick={this.handleInfo}>show info</button>
          {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              error!
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}
