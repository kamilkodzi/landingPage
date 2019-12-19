import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function LandingJumbotron() {
    return (
        <Jumbotron className="Jumbotron-landing d-flex align-items-center min-vh-100" style={{fontFamily:"Lato"}}>
            <Container className="text-center">
            <h1 style={{fontSize:'6.2em'}}>
            <FontAwesomeIcon icon={faHome} />
                Instant IA</h1>
            <p>We are an automate AI platform for  humans.</p>
            </Container>
        </Jumbotron>
    )
}

export default LandingJumbotron;