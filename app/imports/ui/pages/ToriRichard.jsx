import React from 'react';
import { Container } from 'semantic-ui-react';
import ToriRichardFooter from '../components/ToriRichardFooter';
import ToriRichardHeader from '../components/ToriRichardHeader';
import ToriRichardMain from '../components/ToriRichardMain';

export default class ToriRichard extends React.Component {
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
