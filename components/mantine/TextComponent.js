'use client';
import React from 'react';
import { Text } from '@mantine/core';
const TextComponent = ({ fw, fs, text, ta, mb, color, fz }) => {
  return (
    <Text fz={fz} fw={fw} fs={fs} ta={ta} mb={mb} color={color}>
      {text}
    </Text>
  );
};

export default TextComponent;
