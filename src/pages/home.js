import React from 'react';
import {NoteRow, NoteListHeader} from "../components";
import {Container} from 'react-bootstrap';


export function Home(props){

    const {notes, setNotes} = props.value;

    function handleRemoveNote(id) {
        setNotes(notes.filter((note) => note.id !== id));
    }

    function renderRowHeader() {
        if (notes.length > 0) {
            return <NoteListHeader/>;
        }
        else {
            return null;
        }
    }


    function renderRows() {
        if(notes.length > 0) {
            return notes.map((note) => <NoteRow key={note.id} {...note} handleRemoveNote={handleRemoveNote} />);
        }
        else {
            return null;
        }
    }

    return(
        <Container fluid>
            <div>
                {renderRowHeader()}
            </div>
            <div>
                {renderRows()}
            </div>
        </Container>
    );
}