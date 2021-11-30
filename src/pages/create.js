import React from 'react';
import {NoteForm} from "../components";
import {useHistory} from "react-router-dom";
import {Col, Row, Container} from "react-bootstrap";

export function Create(props){
    const {notes, setNotes} = props.value;
    const history = useHistory();

    function handleSubmit(note) {
        setNotes([note,...notes]);
        history.push('/');
    }


    return(
        <Container fluid>
            <Row className='d-flex'>
                <Col xs={12}>
                    <h2>Create Note</h2>
                </Col>
            </Row>
            <NoteForm handleSubmit={handleSubmit} />
        </Container>
    );
}