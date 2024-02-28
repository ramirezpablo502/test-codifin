import React from "react";
import { Wrapper } from "./style";
import { LateralMenuProps } from "./model";
import { useSelector } from "react-redux";
import { getShoppingCart } from "../../store/shoppingCartSlice";

import ButtonComponent from "../button/button";
import { Grid } from "@mui/material";
import CardComponent from "../card/card";

const LateralMenuComponent: React.FC<LateralMenuProps> = ({
  showCart,
  closeCart,
}) => {
  const shoppingCart = useSelector(getShoppingCart);

  const getTotalProducts = () =>
    shoppingCart.reduce(
      (total: any, product: any) => total + product.quantity,
      0
    );

  return (
    <Wrapper>
      <div className={`menu ${showCart ? "open" : ""}`}>
        <br />
        <h1>Shopping cart ({getTotalProducts()})</h1>
        <br />
        <br />
        <div className="container">
          <Grid container spacing={2}>
            {shoppingCart.map((element: any, index: number) => {
              const { name, description, quantity, image, price } = element;
              return (
                <Grid item xs={12} key={index}>
                  <CardComponent
                    name={name}
                    description={description}
                    image={image}
                    price={price}
                    showDetails={false}
                    showAddCart={false}
                    counterItems={quantity}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <br />
        <br />
        <ButtonComponent
          onClick={closeCart}
          text="Close shopping cart"
          width="100%"
        />
        <br />
        <br />
      </div>
    </Wrapper>
  );
};

export default LateralMenuComponent;
