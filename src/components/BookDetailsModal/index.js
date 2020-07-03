import React, { useState, useContext } from "react";
import { Modal, Row, Col, Card, Button } from "react-bootstrap";
import AddToShelfModal from "../AddToShelfModal";
import { BooksLibraryContext } from "../../App";
import Review from "../Review";

const BookDetailsModal = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { setBookToGoToShelf, setShowReview } = useContext(BooksLibraryContext);

  const handleClick = () => {
    setModalShow(true);
    setBookToGoToShelf(props.selectedbook);
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {props.selectedbook && (
          <Modal.Body>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <img
                      src={props.selectedbook.image_url}
                      alt={props.selectedbook.title}
                    />
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h4>Title: {props.selectedbook.title}</h4>
                        <p> Author: {props.selectedbook.author}</p>
                        <p>Category: {props.selectedbook.category}</p>
                        <p>Description: {props.selectedbook.description}</p>
                        {props.selectedbook.notes && (
                          <p>
                            <strong>Notes:</strong> {props.selectedbook.notes}
                          </p>
                        )}
                        {props.selectedbook.rate && (
                          <p>
                            <strong>Rate:</strong> {props.selectedbook.rate}
                          </p>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-right">
                        <Button onClick={() => handleClick()}>
                          Add to shelf
                        </Button>
                      </Col>
                      <AddToShelfModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </Row>
                    <Row className="py-5 text-right">
                      <Col>
                        <Button onClick={() => setShowReview(true)}>
                          Review Book
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Modal.Body>
        )}
      </Modal>
      <Review book={props.selectedbook} />
    </>
  );
};
export default BookDetailsModal;
