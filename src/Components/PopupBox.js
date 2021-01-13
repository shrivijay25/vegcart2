import React from "react";
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel'


function Config_Popup(props) {



        return(
              <Modal
                {...props}
                size="md"
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <h3 className="font-italic"> {props.p_name} </h3>
                </Modal.Header>
                <Modal.Body className=" d-flex align-items-center justify-content-center">
                        <Carousel   interval="1000" >
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={props.p_image}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={props.p_image}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={props.p_image}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>
                </Modal.Body>
            </Modal>

        )
    }

export default  Config_Popup;