import React from "react";

const FormatName: React.FC = () => {
  
  const user = {
    firstName: "Nguyễn Minh",
    lastName: "Quân",
  };

  const formatName = (user: { firstName: string; lastName: string }) => {
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <div>
      <h3>Họ và tên: {formatName(user)}</h3>
    </div>
  );
};

export default FormatName;
