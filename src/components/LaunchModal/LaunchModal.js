import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const LaunchModal = ({selectedItemName, selectedItem, handleLuckyOne}) => {
    console.log(selectedItem);
    // console.log(selectedItem);
    // if(selectedItem.length >0 ){
    //     const {id, title} = selectedItem;
    //     const imgSource = `../../images/${id}-${title}.jpg`;
    // }
    
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
              <Modal.Title>{selectedItemName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
};

export default LaunchModal;