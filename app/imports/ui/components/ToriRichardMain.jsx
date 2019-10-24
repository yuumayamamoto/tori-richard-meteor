import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class ToriRichardMain extends React.Component {
  render() {
    return (
        <main>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src='/images/bwod-13535.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-12396.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-12874.jpg' size='large' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src='/images/bwod-12398.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-11921.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-2777.jpg' size='large' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </main>
    );
  }
}
