import React from "react";
import {Modal, Button} from "react-bootstrap";

export function ContentModal(props) {

    return (
        <Modal show={props.show} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title>
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>
                    {new Date(props.dateTime).toLocaleDateString()}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {new Date(props.dateTime).toLocaleTimeString()}
                </h4>
                <p>{props.content}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}