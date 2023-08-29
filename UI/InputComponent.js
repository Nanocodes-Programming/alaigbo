import { TextInput } from '@mantine/core';
import React from 'react';

const InputComponent = ({ value, setValue, label, type, required }) => {
  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      label={label}
      type={type || 'text'}
      styles={{ input: { border: '1px solid #DE5000',  } }}
      required={required || false}
    />
  );
};

export default InputComponent;
