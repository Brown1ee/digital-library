import React, { useContext, useState, useEffect } from "react";
import { BooksLibraryContext } from "../../App";
import { Row, Col, Container } from "react-bootstrap";

const ShelfWithReview = () => {
  const [reviewedShelf, setReviewedShelf] = useState([]);
  const { shelfs } = useContext(BooksLibraryContext);

  useEffect(() => {
    shelfs
      .filter((elem) => elem.notes.length || elem.rate)
      .map((item) => setReviewedShelf([...reviewedShelf, item]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shelfs]);
  return (
    <>
      <Container>
        <Row className="py-5" style={{ paddingTop: "150px" }}>
          <Col className="py-5">
            <h4 className="text-center">Rated</h4>
          </Col>
        </Row>
        <Row>
          {reviewedShelf.map((item, i) => (
            <Col key={i} className="mb-5">
              <Row>
                <Col className="text-center">
                  <strong>Shelf Name:</strong>
                  {item.shelfName}
                </Col>
                <Col className="text-center">
                  <strong>Notes:</strong>
                  {item.notes}
                </Col>
                <Col>
                  <strong>Rates:</strong>
                  {item.rate}
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
        <Row>
          {reviewedShelf.map(
            (shelf) =>
              shelf.bookList &&
              shelf.bookList.map((item, i) => (
                <Col md={6} key={i}>
                  <img src={item.image_url} alt={item.title} />
                </Col>
              ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default ShelfWithReview;
