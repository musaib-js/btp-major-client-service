import React from 'react';
import Button from '@mui/material/Button';

const SingleButton = ({ variant, color, size, label,background, ...restProps }) => {

  return (
    <Button
      //sx={{ background: background}} // any style to be overriden
      variant={variant}
      color={color}
      size={size}
      {...restProps} // This will spread any additional props
    >
      {label}
    </Button>
  );
};

SingleButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  label: 'Button',
  // Add other default props as needed
};

export default SingleButton;
