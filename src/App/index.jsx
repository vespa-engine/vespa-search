import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { ThemeProvider } from 'App/styles/theme';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </ThemeProvider>
  );
}
