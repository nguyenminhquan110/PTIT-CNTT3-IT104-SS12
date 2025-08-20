import React, { Component } from "react";

// ---------------------
// Component Con
// ---------------------
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface DetailPostProps {
  post: Post;
}

class DetailPost extends Component<DetailPostProps> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
        <h3>{title}</h3>
        <p>{content}</p>
        <p><strong>Tác giả:</strong> {author}</p>
        <small>ID bài viết: {id}</small>
      </div>
    );
  }
}

// ---------------------
// Component Cha
// ---------------------
interface ListPostState {
  posts: Post[];
}

class ListPost extends Component<{}, ListPostState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Giới thiệu về ReactJS",
          content: "ReactJS là thư viện JavaScript phổ biến để xây dựng giao diện người dùng.",
          author: "Nguyễn Minh Quân"
        },
        {
          id: 2,
          title: "Props và State trong React",
          content: "Props được dùng để truyền dữ liệu từ component cha xuống component con.",
          author: "Trần Văn Nam"
        },
        {
          id: 3,
          title: "JSX là gì?",
          content: "JSX cho phép viết HTML trong JavaScript và dễ dàng render ra giao diện.",
          author: "Lê Thị Hoa"
        }
      ]
    };
  }

  render() {
    return (
      <div style={{ border: "2px solid blue", padding: "20px" }}>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default ListPost;
