import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchProducts } from "../../store/productsSlice";

import NavbarComponent from "../../components/navbar/navbar";

const DashboardPage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts() as any);
    }
  }, [status, dispatch]);

  return (
    <div>
      <NavbarComponent title="products list" />
      {status === "loading" ? (
        <div>Loading</div>
      ) : (
        <>
          <h1>Todos</h1>
        </>
      )}
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
