import React, {useState} from 'react';
import {
    Button,
    Row,
    Col
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import { ContentModal } from './contentModal';

export function NoteRow({
    id,
    title,
    content,
    dateTime,
    handleRemoveNote
                    }) {
    const [showContent, setShowContent] = useState(false);


    function renderRow(){
        return (
            <Row className='bg-dark text-white d-flex align-items-center m-1'>
                <Col className='d-inline-block'>
                    <LinkContainer to={`/Edit/${id}`}>
                        <div >{title}</div>
                    </LinkContainer>
                </Col>
                <Col className='d-inline-block'>
                    <LinkContainer to={`/Edit/${id}`}>
                        <div>{new Date(dateTime).toLocaleDateString()}</div>
                    </LinkContainer>
                </Col>
                <Col className='d-inline-block'>
                    <LinkContainer to={`/Edit/${id}`}>
                        <div>{new Date(dateTime).toLocaleTimeString()}</div>
                    </LinkContainer>
                </Col>
                <Col className='d-inline-flex justify-content-center p-0'>
                    <Button className='w-100' style={{ borderRadius: '0' }} onClick={() => setShowContent(true)}>Note</Button>
                </Col>
                <Col className='d-inline-flex justify-content-center p-0'>
                    <Button className='btn btn-danger w-100' style={{ borderRadius: '0' }} onClick={() => handleRemoveNote(id)}>Delete</Button>
                </Col>
            </Row>
        );
    }

    return(
        <div>
            {renderRow()}
            <ContentModal
                show={showContent}
                onHide={() => setShowContent(false)}
                content={content}
                title={title}
                dateTime={dateTime}
            />
        </div>
    );
}