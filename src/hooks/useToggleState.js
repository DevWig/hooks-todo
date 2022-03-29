import { useState } from 'react';

function UseToggleState(initialVal = false){
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default UseToggleState;