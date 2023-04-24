import React from 'react';
import { Stack } from '@mantine/core';
import { parseMarkdown } from 'App/pages/search/md-parser';
import { typography } from 'App/styles/theme/typography';

export const ENDPOINT = 'https://llmsearch.inference.workers.dev';

const md = `
# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

> A block
>

>> quote with **bold** text

Here is an ~example~ of a _searcher_ in **Vespa**:

\`\`\`java
public class MySearcher extends Searcher {
    private Query processQuery(Query query) {
        // Implement query processing logic here
        return query;
    }
    private Result processResult(Result result) {
        // Implement result processing logic here
        return result;
    }
}
\`\`\`

In this example, \`MySearcher\` extends the \`Searcher\` class [method](google.com) takes in a \`Query\` object and an \`Execution\` object, which is used to execute the query.
The method then processes the query and executes it using the \`Execution\` object. Finally, it processes the result and returns it.
This is just a basic example, and the actual processing logic will depend on the specific use case. Developers can provide their own searchers and inject them into the query chain to customize the search behavior. [1][2]

---

1. First item
1. Second item
1. Third item
    1. Indented item
    1. Indented item

---

- First item
- Second item
- Third item
    - Indented item
    - Indented item
`;
export function Md() {
  return <Stack sx={typography()}>{parseMarkdown(md)}</Stack>;
}
