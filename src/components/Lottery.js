import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

export default class Lottery extends Component {
  static defaultProps = {
    title: "Grand Lottery",
    maxNum: 40,
    numBalls: 6,
  };

  state = {
    nums: Array.from({ length: this.props.numBalls }),
  };

  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map((n) =>
        Math.floor(Math.random() * this.props.maxNum)
      ),
    }));
  }

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <section style={{marginBottom: '4rem'}}>
        <h1>{this.props.title.toUpperCase()}</h1>
        <div style={{ display: "flex" }} className="Lottery">
          {this.state.nums.map((num, i) => (
            <Ball key={i} num={num} />
          ))}
        </div>
        <button class="Button" onClick={this.handleClick}>
          Generate
        </button>
      </section>
    );
  }
}
