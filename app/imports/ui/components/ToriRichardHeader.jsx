import React from 'react';
import { Image, Input, Menu, Icon } from 'semantic-ui-react';

export default class ToriRichardHeader extends React.Component {
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
