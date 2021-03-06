import { useState } from 'react';

function UseInputState(initialVal){
  const [value, setValue] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};

export default UseInputState;