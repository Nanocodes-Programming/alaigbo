'use client';

import { Accordion, Group, Text, Title } from '@mantine/core';

function AccordionLabel({ label }) {
  return (
    <Group noWrap>
      <div>
        <Title order={4} fw={'bold'}>
          {label}
        </Title>
      </div>
    </Group>
  );
}

function DemoTwo({ data }) {
  const items = data.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text className="leading-relaxed" size="md" mb={10}>
          {item.content}
        </Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Accordion chevronPosition="right" variant="contained" mt={80}>
      {items}
    </Accordion>
  );
}

export default DemoTwo;
