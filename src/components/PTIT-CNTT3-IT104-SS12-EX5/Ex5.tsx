import React, { Component } from "react";

// ---------------------
// Component Con
// ---------------------
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ChildrenProps {
  product: Product;
}

class ChildrenProduct extends Component<ChildrenProps> {
  render() {
    const { id, name, price, quantity } = this.props.product;
    return (
      <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
        <h3>Thông tin sản phẩm (Component Con)</h3>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Tên sản phẩm:</strong> {name}</p>
        <p><strong>Giá:</strong> {price} VND</p>
        <p><strong>Số lượng:</strong> {quantity}</p>
      </div>
    );
  }
}

// ---------------------
// Component Cha
// ---------------------
interface ParentState {
  product: Product;
}

class ParentProduct extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      product: {
        id: 1,
        name: "Laptop Dell XPS 13",
        price: 28000000,
        quantity: 5
      }
    };
  }

  render() {
    return (
      <div style={{ border: "2px solid blue", padding: "20px" }}>
        <h2>Đây là Component Cha</h2>
        {/* Truyền object product xuống Component Con */}
        <ChildrenProduct product={this.state.product} />
      </div>
    );
  }
}

export default ParentProduct;
