import React, { useState } from 'react';
import { Button } from '@mantine/core';

export default function Search() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
  );
}
