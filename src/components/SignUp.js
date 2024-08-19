import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { RiArrowDropDownLine } from "react-icons/ri";
import signUpImg from "../assets/images/signUp/eat.jpg";
import { FaX } from "react-icons/fa6";

const MyModalComponent = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} className="signup-modal container-fluid" centered>
        <Modal.Body className="row signup-bg">
          <div className="col-8">
            <Form className=" modal-col1 py-1">
              <div className="row">
                <h2 className="Poppins signup-h1">Signup Get Your Meal</h2>
                <p className="signup-p1">
                  Healthy, tasty and hassle-free meals are waiting for you.
                  Start eating well today. You can cancel or pause anytime. And
                  the first meal is on us!
                </p>

                <Form.Group className="col ">
                  <Form.Label htmlFor="name" className="form-label">
                    Enter Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    id="name"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="col">
                  <Form.Label htmlFor="mail" className="form-label">
                    Enter Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="mail"
                    id="mail"
                  ></Form.Control>
                </Form.Group>
              </div>
              <div className="row py-3 align-items-end">
                <Form.Group className="col">
                  <Form.Label htmlFor="find-us" className="form-label">
                    Select Find Us
                  </Form.Label>
                  <div className="select-custom-container">
                    <select
                      type="select"
                      name="find-us"
                      id="find-us"
                      className="custom-select"
                    >
                      <option value="">Please Select</option>
                      <option value="Please Select1">Please Select1</option>
                      <option value="Please Select2">Please Select2</option>
                      <option value="twiPlease Select3tter">
                        Please Select3
                      </option>
                      <option value="Please Select4">Please Select4</option>
                      <option value="Please Select5">Please Select5</option>
                    </select>
                    <label htmlFor="find-us">
                    <RiArrowDropDownLine htmlFor="find-us" className="select-custom-icon" />
                    </label>
                    
                  </div>
                </Form.Group>
                <Form.Group className="col ">
                  <Button className="modal-submit" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </div>
            </Form>
          </div>
          <div className="col ps-3 signup-col2">
            <img src={signUpImg} className="signup-img" />
            <button className="close-btn" onClick={handleClose}>
              <span>
                <FaX />
              </span>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyModalComponent;
