import React from "react";
import { Button } from "@mui/material";
import { Wrapper } from "./style";
import { ButtonProps } from "./model";

const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled = false,
  width = "150px",
}) => {
  return (
    <Wrapper width={width}>
      <Button
        className="button-add"
        variant="contained"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    </Wrapper>
  );
};

export default ButtonComponent;
