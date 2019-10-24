import React from 'react';
import { Grid, Image, Input, List } from 'semantic-ui-react';

export default class ToriRichardFooter extends React.Component {
  render() {
    return (
        <footer>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column textAlign='center'>
                <Image src='/images/bwod-join-our-ohana-icon.png' size='large' />
                <h1 className='tori-richard-cyan'>JOIN OUR OHANA</h1>
                <Input size='big' icon='chevron right' transparent placeholder='Your email' />
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item className='tori-richard-cyan'>Contact Us</List.Item>
                  <List.Item className='tori-richard-cyan'>Gift Cards</List.Item>
                  <List.Item className='tori-richard-cyan'>Return & Exchange</List.Item>
                  <List.Item className='tori-richard-cyan'>Shipping & Handling</List.Item>
                  <List.Item className='tori-richard-cyan'>Track A Package</List.Item>
                  <List.Item className='tori-richard-cyan'>Store Credit Balance</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item className='tori-richard-cyan'>Find A Store</List.Item>
                  <List.Item className='tori-richard-cyan'>Join Our Team</List.Item>
                  <List.Item className='tori-richard-cyan'>Corporate Uniforms</List.Item>
                  <List.Item className='tori-richard-cyan'>Privacy Policy</List.Item>
                  <List.Item className='tori-richard-cyan'>ADA Accessibility</List.Item>
                  <List.Item className='tori-richard-cyan'>Size Guide</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </footer>
    );
  }
}
