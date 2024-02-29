import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardProps } from "./model";
import { Wrapper } from "./style";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  setShoppingCart,
} from "../../store/shoppingCartSlice";

import ButtonComponent from "../button/button";
import ModalComponent from "../modal/modal";

const CardComponent: React.FC<CardProps> = ({
  name,
  description,
  image,
  price,
  showDetails = true,
  showAddCart = true,
  counterItems = 0,
  showCounter = false,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();

  const handleAddCart = () => {
    const payload = {
      name,
      price,
      description,
      image,
    };
    dispatch(setShoppingCart(payload));
    onCloseModal();
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ name: name }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ name: name }));
  };

  return (
    <Wrapper>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <br />
          <Typography variant="h5" color="text.secondary">
            ${price} MXN
          </Typography>
        </CardContent>
        <div className="content-button">
          {showDetails && (
            <ButtonComponent
              onClick={onOpenModal}
              text="Show detail"
              width="100%"
            />
          )}
          <br />
          {showAddCart && (
            <ButtonComponent
              onClick={handleAddCart}
              text="Add to cart"
              width="100%"
            />
          )}
        </div>
        {showCounter && (
          <div className="counter">
            <ButtonComponent onClick={handleDecrement} text="-" width="10px" />
            <p className="number">{counterItems}</p>
            <ButtonComponent onClick={handleIncrement} text="+" width="10px" />
          </div>
        )}
      </Card>

      <ModalComponent open={openModal} onClose={onCloseModal}>
        <h1>Product detail: {name}</h1>
        <br />
        <img src={image} loading="lazy" alt={name} />
        <h2>{name}</h2>
        <h5>{description}</h5>
        <br />
        <h2>${price} MXN</h2>
        <br />
        <ButtonComponent
          onClick={handleAddCart}
          text="Add to cart"
          width="100%"
        />
      </ModalComponent>
    </Wrapper>
  );
};

export default CardComponent;
