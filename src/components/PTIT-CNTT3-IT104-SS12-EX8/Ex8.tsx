import React from "react";

// Dữ liệu mẫu
interface User {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
}

const users: User[] = [
  { id: 1, name: "Malcolm Lockyer", dob: "21/03/1961", gender: "Nam", address: "New york" },
  { id: 2, name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
];

// Action buttons
const ActionButtons: React.FC = () => (
  <div style={{ display: "flex", gap: "8px" }}>
    <button style={{ padding: "4px 10px", border: "1px solid #ccc", borderRadius: "4px", cursor: "pointer" }}>
      Sửa
    </button>
    <button
      style={{
        padding: "4px 10px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Xóa
    </button>
  </div>
);

// Row component
const TableRow: React.FC<{ user: User }> = ({ user }) => (
  <tr>
    <td style={{ padding: "10px", textAlign: "center" }}>{user.id}</td>
    <td style={{ padding: "10px" }}>{user.name}</td>
    <td style={{ padding: "10px", textAlign: "center" }}>{user.dob}</td>
    <td style={{ padding: "10px", textAlign: "center" }}>{user.gender}</td>
    <td style={{ padding: "10px" }}>{user.address}</td>
    <td style={{ padding: "10px", textAlign: "center" }}>
      <ActionButtons />
    </td>
  </tr>
);

// Header component
const TableHeader: React.FC = () => (
  <thead style={{ backgroundColor: "#f3f4f6" }}>
    <tr>
      <th style={{ padding: "10px" }}>STT</th>
      <th style={{ padding: "10px" }}>Họ và tên</th>
      <th style={{ padding: "10px" }}>Ngày sinh</th>
      <th style={{ padding: "10px" }}>Giới tính</th>
      <th style={{ padding: "10px" }}>Địa chỉ</th>
      <th style={{ padding: "10px" }}>Hành động</th>
    </tr>
  </thead>
);

// Table component
const UserTable: React.FC = () => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      border: "1px solid #e5e7eb",
    }}
  >
    <TableHeader />
    <tbody>
      {users.map((user) => (
        <TableRow key={user.id} user={user} />
      ))}
    </tbody>
  </table>
);

const Ex8: React.FC = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "20px" }}>Danh sách người dùng</h2>
      <UserTable />
    </div>
  );
};

export default Ex8;
