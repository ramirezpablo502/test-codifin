import React from "react";
import { Wrapper } from "./style";
import { FiltersProps } from "./model";

import ButtonComponent from "../../../../components/button/button";
import TextInputComponent from "../../../../components/textInput/textInput";

const FiltersDashboard: React.FC<FiltersProps> = ({
  setModalAdd,
  search,
  setSearch,
}) => {
  const handleOpen = () => {
    setModalAdd(true);
  };

  return (
    <Wrapper>
      <TextInputComponent
        name={"search-product"}
        setValue={setSearch}
        validate={/^[a-zA-Z]*$/}
        value={search}
        placeholder={"Search product"}
      />
      <ButtonComponent text="Add product" onClick={handleOpen} />
    </Wrapper>
  );
};

export default FiltersDashboard;
