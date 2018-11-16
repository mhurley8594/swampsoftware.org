import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    CardDeck,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

class Portal extends Component {
    render() {
        return (
            <div>
                <h1>
                    Welcome
                </h1>
                <CardDeck>
                    <Card>
                        <CardBody>
                            <CardTitle>Nutrient Log</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Swamp Certificate</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Weather</CardTitle>
                        </CardBody>
                    </Card>
                </CardDeck>
                <div>
                    <Link to="/updates">Updates</Link>
                </div>
                <div>
                    <Link to="/info">Info</Link>
                </div>
            </div>
        );
    }
}

export default Portal;
