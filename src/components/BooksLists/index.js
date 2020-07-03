import React, { useState, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BookDetailsModal from "../BookDetailsModal";
import { BooksLibraryContext } from "../../App";

const BooksLists = () => {
  const [selectedbook, setselectedbook] = useState();
  const { bookList, modalBookShow, setModalBookShow } = useContext(
    BooksLibraryContext
  );

  const handleClick = (status, book) => {
    setModalBookShow(status);
    setselectedbook(book);
  };
  return (
    <div>
      <Container>
        <Row className="py-5">
          {bookList.map((item, i) => (
            <Col key={i} md={4} className="py-5 text-center">
              <img
                src={item.image_url}
                onClick={() => handleClick(true, item)}
                alt={item.title}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <BookDetailsModal
        show={modalBookShow}
        onHide={() => setModalBookShow(false)}
        selectedbook={selectedbook}
      />
    </div>
  );
};
export default BooksLists;
