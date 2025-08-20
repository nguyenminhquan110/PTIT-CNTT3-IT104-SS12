import React from "react";

// Component Header
const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0", padding: "10px", textAlign: "center" }}>
      <h2>Header</h2>
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#1e3a8a", color: "white", padding: "10px", height: "100%" }}>
      <h3>Menu</h3>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

// Component Main
const Main: React.FC = () => {
  return (
    <div style={{ padding: "20px", flex: 1 }}>
      <h3>Main</h3>
      <p>Nội dung chính sẽ hiển thị ở đây...</p>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0", padding: "10px", textAlign: "center" }}>
      <h4>Footer</h4>
    </div>
  );
};

const AdminIndex: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <Header />

      {/* Nội dung gồm Menu + Main */}
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ width: "200px" }}>
          <Menu />
        </div>
        <Main />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminIndex;
