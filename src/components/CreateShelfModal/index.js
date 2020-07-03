import React, { useContext, useState } from "react";
import { Modal, Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BooksLibraryContext } from "../../App";

const CreateShelfModal = (props) => {
  const history = useHistory();
  const [shelfName, setShelfName] = useState("");
  const [shelfCategory, setShelfCategory] = useState("");
  const { bookList, shelfs, setShelfs, setModalShow } = useContext(
    BooksLibraryContext
  );
  const categories = [...new Set(bookList.map((item) => item.category))];

  const handleCreateShelf = (e) => {
    e.preventDefault();
    setShelfs([
      ...shelfs,
      { shelfName, shelfCategory, bookList: [], notes: [], rate: "" },
    ]);
    setModalShow(false);
    history.push("/shelves");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Card className="py-5">
          <Card.Body>
            <Form onSubmit={(e) => handleCreateShelf(e)}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Shelf name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter shelf name"
                  onChange={(e) => setShelfName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicPassword"
                onChange={(e) => setShelfCategory(e.target.value)}
              >
                <Form.Control size="sm" as="select">
                  <option>None</option>
                  {categories.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};
export default CreateShelfModal;
