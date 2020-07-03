import React, { useContext } from "react";
import {
  Modal,
  Card,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
  Form,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BooksLibraryContext } from "../../App";

const ReviewModal = (props) => {
  const {
    shelfs,
    setNotes,
    setRadioValue,
    radioValue,
    notes,
    setShelfs,
    bookList,
    setBookList,
    setShowReview,
  } = useContext(BooksLibraryContext);

  const radios = [1, 2, 3, 4, 5];
  const history = useHistory();

  const handlePost = () => {
    if (props.data.shelf === 0 || props.data.shelf) {
      const shelfArray = [...shelfs];
      shelfArray[props.data.shelf].notes.push(notes);
      shelfArray[props.data.shelf].rate = radioValue;
      setShowReview(false);
      setShelfs(shelfArray);
      history.push("/shelf-with-review");
    }
    if (props.data.book) {
      const copyBooks = [...bookList];
      const bookIndex = bookList.findIndex(
        (item) => item.title === props.data.book.title
      );
      copyBooks[bookIndex].notes = notes;
      copyBooks[bookIndex].rate = radioValue;
      setBookList(copyBooks);
      setShowReview(false);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <h5 className="font-weight-bold">Rate it</h5>
                {radios.map((item, i) => (
                  <ButtonGroup toggle key={i}>
                    <ToggleButton
                      key={i}
                      type="radio"
                      variant="secondary"
                      name="radio"
                      value={i}
                      checked={radioValue === i}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {item}
                    </ToggleButton>
                  </ButtonGroup>
                ))}
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave some notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={() => handlePost()}>Post</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};
export default ReviewModal;
