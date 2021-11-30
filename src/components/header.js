import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {
    Container,
    Button,
    Col,
    Row
} from 'react-bootstrap';

export function Header(props){
    const {notes, setNotes} = props.value;

    function handleClear() {
        setNotes([]);
        props.clearNotes();
    }

    return(
        <header>
            <Container fluid>
                <h1>Notes</h1>
                <Row className='bg-light p-2'>
                    <Col sm={12} lg={4} className='d-inline-flex justify-content-center p-2'>
                        <LinkContainer to='/'>
                            <Button className='btn btn-lg w-100' color='primary' active>Note List</Button>
                        </LinkContainer>
                    </Col>
                    <Col sm={12} lg={4} className='d-inline-flex justify-content-center p-2'>
                        <LinkContainer to='/Create'>
                            <Button className='btn btn-lg w-100' color='info' active>Add Note</Button>
                        </LinkContainer>
                    </Col>
                    <Col sm={12} lg={4} className='d-inline-flex justify-content-center p-2'>
                        <Button onClick={handleClear} className='btn btn-lg btn-danger w-100' active>
                            Clear Notes
                        </Button>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}