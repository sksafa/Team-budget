import React, { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Navbar.css'

const Navbar = () => {
    return (
        <Fragment>
            <Container fluid className="navbar">
                <Row>
                    <Col lg={12} md={12}>
                        <div>
                            <p className="cghg">National Cricket Player of Bangladesh</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Navbar;