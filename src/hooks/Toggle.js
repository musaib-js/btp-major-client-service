// Toggle.js
import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [toggle, setToggle] = useState(initialState);

  const toggler = () => {
    setToggle((prevState) => !prevState);
  };



  return { toggler, toggle };
};

export default useToggle;
