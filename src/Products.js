import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const products = [
    { "id": 1, "header": "Time Travel", "body": "Simply dummy text of the printing and typesetting industry" },
    { "id": 2, "header": "Gambling", "body": "Centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It w" },
    { "id": 3, "header": "Health", "body": " That it has a more-or-less normal distribution of letters, as opposed to usi" },
    { "id": 4, "header": "Fitness", "body": "Over 2000 years old Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, fr" }
]

function Products() {
    return (
        <Jumbotron className="about-us d-flex align-items-center min-vh-100" style={{ fontFamily: "Lato" }}>
            <Container className="text-center">
                <h1 style={{ fontSize: '6.2em' }}>Products</h1>
                <Row>
                    {
                        products.map(items =>
                            <Col key={items.id} xs={{offset:8}} sm={{offset:8}} md={{offset:8}} lg={{offset:8}} xl={{offset:8}}>
                                <Card>
                                    <Card.Header>{items.header}</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{items.body}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </Jumbotron>

    )
}

export default Products;