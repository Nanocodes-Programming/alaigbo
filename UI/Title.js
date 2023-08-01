'use client';
import React from 'react';
import { Title } from '@mantine/core';

const TitleText = ({ text }) => {
  return (
    <Title ta={'center'} underline order={2} mb={30}>
      {text}
    </Title>
  );
};

export default TitleText;
