import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';


const aboutUs=[
    {"id":1,"header":"Mission","body":"our goal is to push the limits of Artificial Inteligence and Profit"},
    {"id":2,"header":"Team","body":"our goal is to push the limits of Artificial Inteligence and Profit"},
    {"id":3,"header":"Culture","body":"What a great jurnetour goal is to push the limits of Artificial Inteligence and Profit"},
    {"id":4,"header":"Career","body":"213 our goal is to push the limits of Artificial Inteligence and Profit"}
]

function AboutUs() {

    return (
        <Jumbotron className="about-us d-flex align-items-center min-vh-100" style={{fontFamily:"Lato"}}>
            <Container className="text-center">
            <h1 style={{fontSize:'6.2em'}}>About Us</h1>
            <Accordion>
            {
                    aboutUs.map(items=>
                    <Card key={items.id}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={items.id}>{items.header}</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={items.id}>
                        <Card.Body>{items.body}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    )
                }
            </Accordion>
            </Container>
        </Jumbotron>
        
    )
}

export default AboutUs;