import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const LaunchModal = ({selectedItemName, handleLuckyOne, selectedItemPrice}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        handleLuckyOne();
        setShow(true)};
    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Lucky-one
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Your Luck Destination is:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1 className='text-center'>{selectedItemName}</h1>
              <h5 className='text-center py-3 my-3'>Tour Cost: <span className='display-6 font-weight-bold'>${selectedItemPrice}</span> Only!</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Book Now
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
};

export default LaunchModal;