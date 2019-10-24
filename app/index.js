import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Icon, Image, Input, List, Menu } from 'semantic-ui-react';

class ToriRichard extends React.Component {
  render() {
    return (
        <Container>
          <ToriRichardHeader />
          <ToriRichardMain />
          <ToriRichardFooter />
        </Container>
    );
  }
}

class ToriRichardHeader extends React.Component {
  render() {
    return (
        <header>
          <Image src='/images/bwod-tori_logo.jpg' size='large' alt='Tori Richard logo' />

          <Menu borderless>
            <Menu.Item name='MENS' className='tori-richard-cyan' />
            <Menu.Item name='WOMENS' className='tori-richard-cyan' />
            <Menu.Item name='ABOUT' className='tori-richard-cyan' />
            <Menu.Item name='STORES' className='tori-richard-cyan' />

            <Menu.Item name='Register' className='tori-richard-gray' position='right' />
            <Menu.Item name='Login' className='tori-richard-gray' />
            <Menu.Item name='Shopping Bag' className='tori-richard-gray'>
              Shopping Bag
              <Icon name='shopping bag' />
            </Menu.Item>
            <Menu.Item name='Register' className='tori-richard-gray'>
              <Input className='icon' icon='search' placeholder='Search' transparent />
            </Menu.Item>

            <Menu.Item>
              <a href='https://www.instagram.com/toririchard/'>
                <Icon name='instagram' className='tori-richard-cyan' />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='https://www.facebook.com/ToriRichardLtd'>
                <Icon name='facebook' className='tori-richard-cyan' />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='https://twitter.com/ToriRichardLtd'>
                <Icon name='twitter' className='tori-richard-cyan' />
              </a>
            </Menu.Item>
          </Menu>
        </header>
    );
  }
}

class ToriRichardMain extends React.Component {
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

class ToriRichardFooter extends React.Component {
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

ReactDOM.render(<ToriRichard/>, document.getElementById('root'));
