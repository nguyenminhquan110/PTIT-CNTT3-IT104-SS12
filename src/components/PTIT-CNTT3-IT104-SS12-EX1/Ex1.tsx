import React, { Component } from "react";

interface Exercises01State {
  name: string;
}

class Exercises01 extends Component<{}, Exercises01State> {
  constructor(props: {}) {
    super(props);

    // Khởi tạo state
    this.state = {
      name: "Nguyễn Minh Quân"
    };
  }

  render() {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
        <h2>Bài tập ReactJS - Exercises01</h2>
        <p>Xin chào, mình là <strong>{this.state.name}</strong> 👋</p>
      </div>
    );
  }
}

export default Exercises01;
