import React from "react";
import {Col, Row} from "react-bootstrap";

export function NoteListHeader(){

    return (
        <div>
            <Row className='d-flex'>
                <Col xs={12}>
                    <h2>Note List</h2>
                </Col>
            </Row>
            <Row className='bg-success text-white d-flex align-items-center m-1'>
                <Col className='d-inline-block justify-content-center'>
                    <div>Title</div>
                </Col>
                <Col className='d-inline-block justify-content-center'>
                    <div>Date</div>
                </Col>
                <Col className='d-inline-block justify-content-center'>
                    <div>Time</div>
                </Col>
                <Col className='d-inline-flex justify-content-center'>
                    <div></div>
                </Col>
                <Col className='d-inline-flex justify-content-center'>
                    <div></div>
                </Col>
            </Row>
        </div>
    );
}