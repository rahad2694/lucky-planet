import React, { useState } from 'react';
import { Accordion, Button, Modal } from 'react-bootstrap';

const QaModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);
    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            QA Section
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>QnA About React Basics</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                <Accordion.Header>How React Works?</Accordion.Header>
                <Accordion.Body>
                    React is an efficient Javascript library that works with the help of its Diff Algorithm. React has JSX which is a syntactic sugar that creates JavaScript objects and helps the developer to maintain cleanliness in the code. React mainly creates a virtual DOM which is a copy of the original DOM. Whenever a change occurs, it detects the change efficiently with the help of its unique key. After detecting and applying change on its virtual DOM, it compares the two DOMs (Virtual one and the Original one). As a result, it becomes easy to make the minimum changes in the required places of the original DOM.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>How useState Works?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Save
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
};

export default QaModal;