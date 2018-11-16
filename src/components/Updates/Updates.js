import React, { Component } from 'react';
import {
    CardDeck,
    Card, 
    CardBody, 
    CardTitle,
    CardFooter,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class Updates extends Component {
    render() {
        return (
            <div>
                <h1>
                    Updates
                </h1>
                <CardDeck>
                    <Card>
                        <CardBody>
                            <CardTitle>Github</CardTitle>
                            <ListGroup>
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <CardFooter>
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </CardFooter>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Goodreads</CardTitle>
                            <ListGroup>
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <CardFooter>
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </CardFooter>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Articles</CardTitle>
                            <ListGroup>
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <CardFooter>
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </CardFooter>
                        </CardBody>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default Updates;
