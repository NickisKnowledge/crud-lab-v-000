import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: '',
    });
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div>
            <label>Restaurant Name: </label>
            <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
