import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardSubtitle, Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

function Home({
  user
}) {
  const authenticated = () => (
    <>
    <CardText>Get started by browsing our items.</CardText>
    <Button color='danger' onClick={signOutUser}> Sign Out </Button>
    </>
  );

  const notAuthenticated = () => (
    <>
    <CardText>Sign in to start using the app</CardText>
    <Button color='info' onClick={signInUser}> Sign In </Button>
    </>
  );

  return (
    <div>
      <Card className='home-card'>
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">A Business to Business management system for our microbrewery.</CardSubtitle>
          <CardText>A single platform to allow our business to create quotes from our products, orders to our distributors and customers, and track sales reports.</CardText>
        </CardBody>
      </Card>
      <Card className='home-form'>
        <CardBody>
        { user ? authenticated() : notAuthenticated() }
        </CardBody>
      </Card>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
