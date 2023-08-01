import React from "react";
import {
    Button,
    Container,
    Form,
    Nav,
    NavDropdown,
    Navbar,
} from "react-bootstrap";
import "./Style.css";

function Navigationbar() {
    return (
        <>
            <Navbar expand="lg" className="main">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: 'white' }}>Music</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: "100px", marginLeft: "168px", gap: "45px" }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{ color: 'white' }}>Home</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: 'white' }}>About</Nav.Link>
                            <Nav.Link href="#action3" style={{ color: 'white' }}>Contacts</Nav.Link>



                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search your music"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigationbar;
