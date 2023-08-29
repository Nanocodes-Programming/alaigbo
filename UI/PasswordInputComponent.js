import { PasswordInput } from '@mantine/core';

const PasswordInputComponent = ({ value, setValue, label, description, placeholder }) => {
  return (
    <PasswordInput 
      placeholder={placeholder}
      label={label}
      description={description || ""}
      withAsterisk
      value={value} 
      onChange={(event) => setValue(event.currentTarget.value)}
      styles={{ input: { border: '1px solid #DE5000',  } }} 
      required={true} 
    />
  );
};

export default PasswordInputComponent;