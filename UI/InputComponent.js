import { TextInput } from '@mantine/core';
import React from 'react';

const InputComponent = ({ value, setValue, label, type }) => {
  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      label={label}
      type={type || 'text'}
       styles={{ input: { border: '1px solid #DE5000',  } }}
    />
  );
};

export default InputComponent;
