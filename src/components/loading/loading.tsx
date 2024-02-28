import React from "react";
import { CircularProgress } from "@mui/material";
import { Wrapper } from "./style";

const LoadingComponent: React.FC<{}> = () => {
  return (
    <Wrapper>
      <CircularProgress color="inherit" />
    </Wrapper>
  );
};

export default LoadingComponent;
