import React, { useState } from "react";
import { AddProductProps } from "./model";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../../store/productsSlice";

import ModalComponent from "../../../../components/modal/modal";
import TextInputComponent from "../../../../components/textInput/textInput";
import ButtonComponent from "../../../../components/button/button";

const AddProductDashboard: React.FC<AddProductProps> = ({
  modalAdd,
  handleCloseModal,
}) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const dispatch = useDispatch();

  const capturedAllProducts =
    !productName || !productDescription || !productPrice;

  const handleSaveProduct = () => {
    const payload = {
      name: productName,
      price: productPrice,
      description: productDescription,
      image: "https://picsum.photos/200",
    };
    dispatch(setProducts(payload));
    handleCloseModal();
    clearForm();
  };

  const clearForm = () => {
    setProductName("");
    setProductDescription("");
    setProductPrice("");
  };

  return (
    <ModalComponent
      title={"Add product"}
      open={modalAdd}
      onClose={handleCloseModal}
    >
      <>
        <TextInputComponent
          name={"product-name"}
          setValue={setProductName}
          validate={/^[a-zA-Z\s]*$/}
          value={productName}
          placeholder={"Product name"}
        />
        <br />
        <TextInputComponent
          name={"product-description"}
          setValue={setProductDescription}
          validate={/^[a-zA-Z\s]*$/}
          value={productDescription}
          placeholder={"Product description"}
        />
        <br />
        <TextInputComponent
          name={"product-price"}
          setValue={setProductPrice}
          validate={/^[0-9]*$/}
          value={productPrice}
          placeholder={"Product price"}
        />
        <br />
        <br />
        <ButtonComponent
          text="Save"
          onClick={handleSaveProduct}
          disabled={capturedAllProducts}
        />
      </>
    </ModalComponent>
  );
};

export default AddProductDashboard;
