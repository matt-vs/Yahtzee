import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 6
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const numToWord = this.props.numberWords[this.props.val - 1]
    let classes = `Die fa-5x fas fa-dice-${numToWord} `;
    if (this.props.locked) classes += 'Die-locked ';
    if (this.props.rolling) classes += 'Die-rolling'
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      >
      </i>
    );
  }
}

export default Die;
