import { useState } from 'react';
import {
  Button,
  Column,
  Content,
  Grid,
  Header,
  HeaderName,
  Tile,
} from '@carbon/react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header aria-label="Hello World">
        <HeaderName href="#" prefix="React">
          Carbon
        </HeaderName>
      </Header>
      <Content>
        <Grid>
          <Column sm={4} md={8} lg={8}>
            <Tile>
              <h1>Hello, World!</h1>
              <p style={{ margin: '1rem 0' }}>
                Webapp realizzata con React, Vite e Carbon Design System.
              </p>
              <Button onClick={() => setCount(count + 1)}>
                Click: {count}
              </Button>
            </Tile>
          </Column>
        </Grid>
      </Content>
    </>
  );
}
