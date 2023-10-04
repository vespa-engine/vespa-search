import React from 'react';
import {
  Accordion,
  ActionIcon,
  Autocomplete,
  Badge,
  Button,
  Checkbox,
  Chip,
  CloseButton,
  Container,
  Divider,
  FileInput,
  Group,
  HoverCard,
  Input,
  JsonInput,
  Rating,
  SegmentedControl,
  Select,
  Skeleton,
  Slider,
  Space,
  Stack,
  Switch,
  Tabs,
  Text,
  TextInput,
} from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import { Content, Icon } from 'App/components';

function DemoActionIcon() {
  return (
    <Group>
      <ActionIcon color="blue" variant="transparent">
        <Icon name="bug" />
      </ActionIcon>
      <ActionIcon color="blue" variant="subtle">
        <Icon name="bug" />
      </ActionIcon>
      <ActionIcon color="blue" variant="default">
        <Icon name="bug" />
      </ActionIcon>
      <ActionIcon color="blue" variant="outline">
        <Icon name="bug" />
      </ActionIcon>
      <ActionIcon color="blue" variant="filled">
        <Icon name="bug" />
      </ActionIcon>
      <ActionIcon color="blue" variant="light">
        <Icon name="bug" />
      </ActionIcon>
    </Group>
  );
}

function DemoButton() {
  return (
    <Group>
      <Button
        color="blue"
        variant="transparent"
        leftSection={<Icon name="bug" />}
      >
        transparent
      </Button>
      <Button color="blue" variant="subtle" leftSection={<Icon name="bug" />}>
        subtle
      </Button>
      <Button color="blue" variant="default" leftSection={<Icon name="bug" />}>
        default
      </Button>
      <Button color="blue" variant="outline" leftSection={<Icon name="bug" />}>
        outline
      </Button>
      <Button color="blue" variant="filled" leftSection={<Icon name="bug" />}>
        filled
      </Button>
      <Button color="blue" variant="light" leftSection={<Icon name="bug" />}>
        light
      </Button>
      <Button color="pink" leftSection={<Icon name="bug" />}>
        button
      </Button>
    </Group>
  );
}

function DemoButtonGradients() {
  return (
    <Group>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        Indigo cyan
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: 'teal', to: 'lime', deg: 105 }}
      >
        Lime green
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: 'teal', to: 'blue', deg: 60 }}
      >
        Teal blue
      </Button>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        Orange red
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      >
        Peach
      </Button>
    </Group>
  );
}

function DemoCloseButton() {
  return (
    <Group justify="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton size="xl" />
    </Group>
  );
}

function DemoAutocomplete() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}

function DemoCheckBoxes() {
  return (
    <>
      <Checkbox onChange={() => {}} checked={false} label="Default checkbox" />
      <Checkbox
        onChange={() => {}}
        checked={false}
        indeterminate
        label="Indeterminate checkbox"
      />
      <Checkbox
        onChange={() => {}}
        checked
        indeterminate
        label="Indeterminate checked checkbox"
      />
      <Checkbox onChange={() => {}} checked label="Checked checkbox" />
      <Checkbox onChange={() => {}} disabled label="Disabled checkbox" />
      <Checkbox
        onChange={() => {}}
        disabled
        checked
        label="Disabled checked checkbox"
      />
      <Checkbox
        disabled
        indeterminate
        label="Disabled indeterminate checkbox"
      />
    </>
  );
}

function DemoChips() {
  return (
    <Group>
      <Chip defaultChecked variant="outline">
        Awesome chip
      </Chip>
      <Chip defaultChecked variant="light">
        Awesome chip
      </Chip>
      <Chip defaultChecked variant="filled">
        Awesome chip
      </Chip>
    </Group>
  );
}

function DemoFileInput() {
  return <FileInput placeholder="Pick file" label="Your resume" withAsterisk />;
}

function DemoInput() {
  return <Input icon={<Icon name="bug" />} placeholder="Your email" />;
}

function DemoJsonInput() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={3}
    />
  );
}

function DemoRating() {
  return <Rating defaultValue={3} />;
}

function DemoSegmentedControl() {
  return (
    <SegmentedControl
      data={['React', 'Angular', 'Svelte', 'Vue']}
      defaultValue="React"
    />
  );
}

function DemoSelect() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}

function DemoSlider() {
  return (
    <>
      <Space h={1} />
      <Slider
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
      <Space h={1} />
    </>
  );
}

function DemoSwitch() {
  return <Switch label="I agree to sell my privacy" />;
}

function DemoTextInput() {
  return (
    <>
      <TextInput placeholder="Your name" label="Full name" withAsterisk />
      <TextInput placeholder="Your name" label="Full name" withAsterisk error />
    </>
  );
}

function DemoTabs() {
  return (
    <>
      <Space h={1} />
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" leftSection={<Icon name="bug" />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" leftSection={<Icon name="bug" />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" leftSection={<Icon name="bug" />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
      <Space h={1} />
    </>
  );
}

function DemoAccordion() {
  return (
    <Accordion defaultValue="customization" variant="contained">
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>
          Colors, fonts, shadows and many other parts are customizable to fit
          your design needs
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>
          Configure components appearance and behavior with vast amount of
          settings or overwrite any part of component styles
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>
          With new :focus-visible pseudo-class focus ring appears only when user
          navigates with keyboard
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

function DemoBadge() {
  return (
    <Group>
      <Badge variant="light">light</Badge>
      <Badge variant="filled">filled</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="dot">dot</Badge>
    </Group>
  );
}

function DemoBadgeGradients() {
  return (
    <Group>
      <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        Indigo cyan
      </Badge>
      <Badge
        variant="gradient"
        gradient={{ from: 'teal', to: 'lime', deg: 105 }}
      >
        Lime green
      </Badge>
      <Badge
        variant="gradient"
        gradient={{ from: 'teal', to: 'blue', deg: 60 }}
      >
        Teal blue
      </Badge>
      <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        Orange red
      </Badge>
      <Badge
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      >
        Peach
      </Badge>
    </Group>
  );
}

function DemoCodeHighlight() {
  const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return 
    <>
      <Button>Hello</Button>
      // <Button>Hello</Button>
    </>
}`;

  return (
    <Stack>
      <CodeHighlight language="markdown" code={demoCode} />
      <CodeHighlight language="tsx" code={demoCode} />
    </Stack>
  );
}

function DemoSkeleton() {
  return (
    <Stack>
      <Skeleton height={21} radius="xl" />
      <Stack gap="xs">
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} radius="xl" />
      </Stack>
      <Skeleton height={8} radius="xl" width="55%" />
    </Stack>
  );
}

function DemoMiscs() {
  return (
    <Stack>
      <Button>text</Button>
      <Button color="yellow">text</Button>
      <Badge variant="light" color="blue">
        text
      </Badge>
      <Badge variant="light" color="yellow">
        text
      </Badge>
      <Icon color="blue" name="bug" />
      <Icon color="yellow" name="bug" />
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will
            be hidden once mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
      <Content
        style={{
          backgroundColor: 'var(--ui-element-background)',
        }}
      >
        Hover card is revealed when user hovers over target element, it will be
        hidden once mouse is not over both target and dropdown elements
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--ui-element-background-gray)',
        }}
      >
        Hover card is revealed when user hovers over target element, it will be
        hidden once mouse is not over both target and dropdown elements
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--ui-element-background-blue)',
        }}
      >
        Hover card is revealed when user hovers over target element, it will be
        hidden once mouse is not over both target and dropdown elements
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--ui-element-background-yellow)',
        }}
      >
        Hover card is revealed when user hovers over target element, it will be
        hidden once mouse is not over both target and dropdown elements
      </Content>
      <Divider />
      <Content
        style={{
          backgroundColor: 'var(--app-background)',
        }}
        withBorder
      >
        getAppBackground
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--app-background-blue)',
        }}
        withBorder
      >
        getAppBackground
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--subtle-background)',
        }}
        withBorder
      >
        getSubtleBackground
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--subtle-background-blue)',
        }}
        withBorder
      >
        getSubtleBackground
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--ui-element-background)',
        }}
        withBorder
      >
        getUiElementBackground
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--ui-element-background-blue',
        }}
        withBorder
      >
        getUiElementBackground
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--hovered-ui-element-background)',
        }}
        withBorder
      >
        getHoveredUiElementBackground
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--hovered-ui-element-background-blue)',
        }}
        withBorder
      >
        getHoveredUiElementBackground
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--subtle-border-and-separator)',
        }}
        withBorder
      >
        getSubtleBorderAndSeparator
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--subtle-border-and-separator-blue)',
        }}
        withBorder
      >
        getSubtleBorderAndSeparator
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--ui-element-border-and-focus)',
        }}
        withBorder
      >
        getUiElementBorderAndFocus
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--ui-element-border-and-focus-blue)',
        }}
        withBorder
      >
        getUiElementBorderAndFocus
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--solid-background)',
        }}
        withBorder
      >
        getSolidBackground
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--solid-background-blue)',
        }}
        withBorder
      >
        getSolidBackground
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--hovered-solid-background)',
        }}
        withBorder
      >
        getHoveredSolidBackground
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--hovered-solid-background-blue)',
        }}
        withBorder
      >
        getHoveredSolidBackground
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--low-contrast-text)',
        }}
        withBorder
      >
        getLowContrastText
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--low-contrast-text-blue)',
        }}
        withBorder
      >
        getLowContrastText
      </Content>
      <Content
        style={{
          backgroundColor: 'var(--high-contrast-text)',
        }}
        withBorder
      >
        getHighContrastText
      </Content>{' '}
      <Content
        style={{
          backgroundColor: 'var(--high-contrast-text-blue)',
        }}
        withBorder
      >
        getHighContrastText
      </Content>
    </Stack>
  );
}

export function Testcomp() {
  return (
    <Container size="sm">
      <Stack>
        <DemoActionIcon />
        <DemoButton />
        <DemoButtonGradients />
        <DemoCloseButton />
        <DemoAutocomplete />
        <DemoCheckBoxes />
        <DemoChips />
        <DemoFileInput />
        <DemoInput />
        <DemoJsonInput />
        <DemoRating />
        <DemoSegmentedControl />
        <DemoSelect />
        <DemoSlider />
        <DemoSwitch />
        <DemoTextInput />
        <DemoTabs />
        <DemoAccordion />
        <DemoBadge />
        <DemoBadgeGradients />
        <DemoCodeHighlight />
        <DemoSkeleton />
        <DemoMiscs />
      </Stack>
    </Container>
  );
}
