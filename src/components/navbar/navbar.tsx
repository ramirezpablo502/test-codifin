import React from "react";
import { Wrapper } from "./style";
import { NavbarProps } from "./model";
import { IconButton } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavbarComponent: React.FC<NavbarProps> = ({
  title,
  setOpenLateralMenu = () => {},
}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <IconButton onClick={setOpenLateralMenu}>
        <ShoppingCartIcon htmlColor="#FFF" />
      </IconButton>
    </Wrapper>
  );
};

export default NavbarComponent;
