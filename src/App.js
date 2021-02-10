import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

class App extends React.Component { /* needed to have
  state in functional components, but since
  the introduction of hooks you have states in
  functional components as well. maybe change this
  later to a functional component instead? 

  försök bygga bootstrap-grejerna i äkta css?*/

  constructor(props) {
    super(props) //allows to use 'this.' in the constructor
    this.state = {
      title: 'Simon Lindqvist',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'One for the future',
        subTitle: 'Here\'s to wanting to make a change',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Let\'s talk'
      }
    }
  }
  /* 
  kan vi göra navbar till en header? det verkar inte så iaf

  I think we could put all the Routes in a Switch and make path="/" as the last route
  so that if the user writes something random in the url like "/abc" it falls back to the homepage. 
  But if we do the exact match, nothing will render other than navbar and footer at the "/abc" url.

  */
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Simon Lindqvist</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}
export default App;
