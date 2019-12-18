import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function LandingJumbotron() {
    return (
        <Jumbotron className="Jumbotron-landing">
            <Container className="text-center">
            <h1 style={{fontSize:'6.2em'}}>Instant IA</h1>
            <p>We are an automate AI platform for  humans.</p>
            </Container>
        </Jumbotron>
    )
}

export default LandingJumbotron;