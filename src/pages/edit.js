import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import {NoteForm} from "../components";
import {Col, Container, Row} from "react-bootstrap";

export function Edit(props){
    const {notes, setNotes} = props.value;
    const { id } = useParams();
    const noteToEdit = notes.find((note) => note.id === id);
    const history = useHistory();

    function  handleSubmit(note) {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes([note, ...filteredNotes]);
        history.push('/');
    }

    return(
        <Container fluid>
            <Row className='d-flex'>
                <Col xs={12}>
                    <h2>Edit Note</h2>
                </Col>
            </Row>
            <NoteForm note={noteToEdit} handleSubmit={handleSubmit}/>
        </Container>
    );
}