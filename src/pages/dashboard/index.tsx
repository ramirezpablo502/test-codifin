import React from "react";
import NavbarComponent from "../../components/navbar/navbar";

const DashboardPage: React.FC<{}> = () => {
  return (
    <div>
      <NavbarComponent title="products list" />
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
