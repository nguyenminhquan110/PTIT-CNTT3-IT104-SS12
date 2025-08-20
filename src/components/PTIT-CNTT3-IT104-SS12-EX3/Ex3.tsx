import React from "react";

const Ex3: React.FC = () => {
  const user = {
    name: "Nguyễn Minh Quân",
    gender: "Nam",
    dob: "01/10/2006",
    email: "nmq@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>
          Họ và tên: <b>{user.name}</b>
        </li>
        <li>
          Giới tính: <b>{user.gender}</b>
        </li>
        <li>
          Ngày sinh: <b>{user.dob}</b>
        </li>
        <li>
          Email: <b>{user.email}</b>
        </li>
        <li>
          Địa chỉ: <b>{user.address}</b>
        </li>
      </ul>
    </div>
  );
};

export default Ex3;
