import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {Form, Button} from "react-bootstrap";
import {Storage} from "../services";

export function NoteForm(props) {

    const [note, setNote] = Storage.useSessionStorage('note',{
        title: props.note ? props.note.title : "",
        content : props.note ? props.note.content : "",
        dateTime : props.note ? props.note.dateTime : ""
    });

    const {id, title, content, dateTime} = note;

    function handleSubmit(event) {
        event.preventDefault();
        const note = {
            id: uuidv4(),
            title,
            content,
            dateTime: new Date()
        };
        props.handleSubmit(note);
        Storage.clearSessionStorage('note');
    }

    function handleInput(event) {
        const {name, value} = event.target;
        setNote((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleClear(){
        setNote((prevState) => ({
            ...prevState,
            title: "",
            content:""
        }));
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control name='title' type="text" value={title} onChange={handleInput}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Note:</Form.Label>
                    <Form.Control
                        name='content'
                        as="textarea"
                        value={content}
                        onChange={handleInput}
                        style={{ height: '200px' }}/>
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button onClick={handleSubmit} className='btn mx-1'>Submit</Button>
                    <Button onClick={handleClear} className='btn btn-danger mx-1'>Clear</Button>
                </div>
            </Form>
        </div>
    );
}