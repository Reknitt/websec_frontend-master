import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

class CoreLayout extends React.Component {
	render() {
    return (
      <Container>

        <Header />

        <main className="py-4">
          <Container>
            {this.props.children}
          </Container>
        </main>

        <Footer />

     </Container>
    );
  }
}

export default CoreLayout;