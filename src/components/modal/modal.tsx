import React from "react";
import { Box, Modal } from "@mui/material";
import { ModalProps } from "./model";
import { Title } from "./style";
import { STYLE_MODAL } from "./constants";

const ModalComponent: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  title = "",
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={STYLE_MODAL}>
        {title && <Title>{title}</Title>}
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
