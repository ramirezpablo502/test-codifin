import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";
import { Wrapper } from "./style";
import { Grid } from "@mui/material";

import LateralMenuComponent from "../../components/lateralMenu/lateralMenu";
import NavbarComponent from "../../components/navbar/navbar";
import CardComponent from "../../components/card/card";
import FiltersDashboard from "./components/filters/filters";
import AddProductDashboard from "./components/addProduct/addProduct";

const DashboardPage: React.FC<{}> = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const products = useSelector(getProducts);

  const handleCloseModal = () => {
    setModalAdd(false);
  };

  const filteredProducts = products.filter((product: any) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = ()=>{
    setShowCart(false)
  }

  return (
    <Wrapper>
      <NavbarComponent title="Products List" setOpenLateralMenu={openCart} />
      <FiltersDashboard
        setModalAdd={setModalAdd}
        search={search}
        setSearch={setSearch}
      />
      <div className="container">
        <Grid container spacing={2}>
          {filteredProducts.map((element: any, index: number) => {
            const { name, description, image, price } = element;
            return (
              <Grid item md={4} sm={4} xs={12} key={index}>
                <CardComponent
                  name={name}
                  description={description}
                  image={image}
                  price={price}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <AddProductDashboard
        modalAdd={modalAdd}
        handleCloseModal={handleCloseModal}
      />
      <LateralMenuComponent showCart={showCart} closeCart={closeCart} />
    </Wrapper>
  );
};

export default DashboardPage;
