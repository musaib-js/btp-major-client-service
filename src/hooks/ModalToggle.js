// ModalToggle.js
import React, { useState } from 'react';

const ModalToggle = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleClose,
    selectedItem,
    setSelectedItem
  };
};

export default ModalToggle;
