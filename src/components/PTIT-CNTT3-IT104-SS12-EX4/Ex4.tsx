import React, { Component } from "react";

// ---------------------
// Component Con
// ---------------------
interface ChildrenProps {
  name: string;
}

class Children_Comp extends Component<ChildrenProps> {
  render() {
    return (
      <div style={{ padding: "10px", border: "1px solid gray", marginTop: "10px" }}>
        <h3>Đây là Component Con</h3>
        <p>Xin chào, mình là <strong>{this.props.name}</strong> 👋</p>
      </div>
    );
  }
}

// ---------------------
// Component Cha
// ---------------------
interface ParentState {
  name: string;
}

class Parent_Comp extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Minh Quân" // 👈 thay bằng tên bạn
    };
  }

  render() {
    return (
      <div style={{ padding: "20px", fontSize: "18px", border: "2px solid blue" }}>
        <h2>Đây là Component Cha</h2>
        {/* Truyền dữ liệu từ cha xuống con qua props */}
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}

export default Parent_Comp;
