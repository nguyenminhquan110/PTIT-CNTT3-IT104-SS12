import React, { Component } from "react";

interface Exercise02State {
  id: number;
  name: string;
  birthday: string;
  address: string;
}

class Exercise02 extends Component<{}, Exercise02State> {
  constructor(props: {}) {
    super(props);

    // Khởi tạo state
    this.state = {
      id: 1,
      name: "Nguyễn Minh Quân",  
      birthday: "01/10/2006",
      address: "Hà Nội, Việt Nam" 
    };
  }

  render() {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
        <h2>Bài tập ReactJS - Exercise02</h2>
        <p><strong>ID:</strong> {this.state.id}</p>
        <p><strong>Tên:</strong> {this.state.name}</p>
        <p><strong>Ngày sinh:</strong> {this.state.birthday}</p>
        <p><strong>Địa chỉ:</strong> {this.state.address}</p>
      </div>
    );
  }
}

export default Exercise02;
