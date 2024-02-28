import React from "react";
import { Wrapper } from "./style";
import { NavbarProps } from "./model";

const NavbarComponent: React.FC<NavbarProps> = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

export default NavbarComponent;
