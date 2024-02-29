import React from "react";
import { Wrapper } from "./style";
import { NavbarProps } from "./model";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getShoppingCart } from "../../store/shoppingCartSlice";

const NavbarComponent: React.FC<NavbarProps> = ({
  title,
  setOpenLateralMenu = () => {},
}) => {
  const shoppingCart = useSelector(getShoppingCart);

  const getTotalProducts = () =>
    shoppingCart.reduce(
      (total: any, product: any) => total + product.quantity,
      0
    );

  return (
    <Wrapper>
      <h1>{title}</h1>
      <IconButton onClick={setOpenLateralMenu}>
        <Badge badgeContent={getTotalProducts()} color="secondary">
          <ShoppingCartIcon htmlColor="#FFF" />
        </Badge>
      </IconButton>
    </Wrapper>
  );
};

export default NavbarComponent;
