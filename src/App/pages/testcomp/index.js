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
  FileInput,
  Group,
  HoverCard,
  Input,
  JsonInput,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Space,
  Stack,
  Switch,
  Tabs,
  Text,
  TextInput,
} from '@mantine/core';
import { Prism } from '@mantine/prism';
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
      <Button color="blue" variant="transparent" leftIcon={<Icon name="bug" />}>
        transparent
      </Button>
      <Button color="blue" variant="subtle" leftIcon={<Icon name="bug" />}>
        subtle
      </Button>
      <Button color="blue" variant="default" leftIcon={<Icon name="bug" />}>
        default
      </Button>
      <Button color="blue" variant="outline" leftIcon={<Icon name="bug" />}>
        outline
      </Button>
      <Button color="blue" variant="filled" leftIcon={<Icon name="bug" />}>
        filled
      </Button>
      <Button color="blue" variant="light" leftIcon={<Icon name="bug" />}>
        light
      </Button>
      <Button color="pink" leftIcon={<Icon name="bug" />}>
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
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
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
      <Chip defaultChecked>Awesome chip</Chip>
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
          <Tabs.Tab value="gallery" icon={<Icon name="bug" />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<Icon name="bug" />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<Icon name="bug" />}>
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
      <Badge>light</Badge>
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

function DemoPrism() {
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
      <Prism language="markup">{demoCode}</Prism>
      <Prism language="tsx">{demoCode}</Prism>
    </Stack>
  );
}

function DemoMiscs() {
  return (
    <Stack>
      <Button>text</Button>
      <Button color="yellow">text</Button>
      <Badge color="blue">text</Badge>
      <Badge color="yellow">text</Badge>
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
      <Content background="ui-element">
        Hover card is revealed when user hovers over target element, it will be
        hidden once mouse is not over both target and dropdown elements
      </Content>
      <Content
        sx={(theme) => ({
          backgroundColor: theme.cr.getUiElementBackground('gray'),
        })}
      >
        Hover card is revealed when user hovers over target element, it will be
        hidden once mouse is not over both target and dropdown elements
      </Content>
      <Content
        sx={(theme) => ({
          backgroundColor: theme.cr.getUiElementBackground('blue'),
        })}
      >
        Hover card is revealed when user hovers over target element, it will be
        hidden once mouse is not over both target and dropdown elements
      </Content>
      <Content
        sx={(theme) => ({
          backgroundColor: theme.cr.getUiElementBackground('yellow'),
        })}
      >
        Hover card is revealed when user hovers over target element, it will be
        hidden once mouse is not over both target and dropdown elements
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
        <DemoMiscs />
        <DemoPrism />
      </Stack>
    </Container>
  );
}
