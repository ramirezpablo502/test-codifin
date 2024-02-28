import React from "react";
import { Wrapper } from "./style";
import { TextField } from "@mui/material";
import { TextInputProps } from "./model";

const TextInputComponent: React.FC<TextInputProps> = ({
  name,
  value,
  setValue,
  validate,
  width = "100%",
  placeholder,
}) => {
  return (
    <Wrapper width={width}>
      <TextField
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event: any) => {
          const inputValue = event.target.value;
          if (validate.test(inputValue)) {
            setValue(inputValue);
          }
        }}
        fullWidth={width === "100%"}
      />
    </Wrapper>
  );
};

export default TextInputComponent;
