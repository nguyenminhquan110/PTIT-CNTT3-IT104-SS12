import React from "react";

// Header
const Header: React.FC = () => (
  <div style={{ backgroundColor: "#9ca3af", padding: "10px", textAlign: "center" }}>
    <h2>Header</h2>
  </div>
);

// Navigation
const Navigation: React.FC = () => (
  <div style={{ backgroundColor: "#6b7280", padding: "10px", textAlign: "center" }}>
    <h3>Navigation</h3>
  </div>
);

const Menu: React.FC = () => (
  <div style={{ backgroundColor: "green", padding: "10px", color: "white", height: "100%" }}>
    <h3>Menu</h3>
  </div>
);

const Cart: React.FC = () => (
  <div style={{ border: "1px solid #ddd", padding: "20px", textAlign: "center" }}>
    Cart
  </div>
);

const Main: React.FC = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", padding: "10px", flex: 1 }}>
    {Array.from({ length: 12 }).map((_, i) => (
      <Cart key={i} />
    ))}
  </div>
);

const Article: React.FC = () => (
  <div style={{ backgroundColor: "lightblue", padding: "10px", width: "200px" }}>
    <h3>Article</h3>
  </div>
);

const UserLayout: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Navigation />

      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ width: "150px" }}>
          <Menu />
        </div>
        <Main />
        <Article />
      </div>
    </div>
  );
};

export default UserLayout;
