'use client';
import { list } from '@/dummyText';
import { Accordion, Group, Text, Title } from '@mantine/core';

function AccordionLabel({ label, description }) {
  return (
    <Group noWrap>
      <div>
        <Title order={4} fw={'bold'}>
          {label}
        </Title>
        {description && (
          <Text
            fs={'italic'}
            size="sm"
            fw={'normal'}
            color="dimmed"
            weight={400}
          >
            {description}
          </Text>
        )}
      </div>
    </Group>
  );
}

function Demo() {
  const items = list.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        {item.content.map((text, i) => (
          <Text className="leading-relaxed" key={i} size="md" mb={10}>
            {text}
          </Text>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Accordion chevronPosition="right" variant="contained" mt={80}>
      {items}
    </Accordion>
  );
}

export default Demo;
