import { Select } from '@mantine/core';
import React from 'react';

const SelectComponent = ({ data, label, setValue, value }) => {
  return (
    <Select
      className="outline-none !focus:outline-none"
      label={label}
      value={value}
      onChange={setValue}
      data={data}
       styles={{ input: { border: '1px solid #DE5000',  } }}
    />
  );
};

export default SelectComponent;
