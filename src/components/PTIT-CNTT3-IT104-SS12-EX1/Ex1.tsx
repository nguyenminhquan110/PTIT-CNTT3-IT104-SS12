import React, { Component } from "react";

interface Ex1State {
  courses: string[];
}

class Ex1 extends Component<{}, Ex1State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      courses: ["HTML", "CSS", "Java", "ReactJS"]
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Danh sách khóa học</h2>
        <ul>
          {this.state.courses.map((course, index) => (
            <li key={index}>
              {index + 1}: {course}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Ex1;
