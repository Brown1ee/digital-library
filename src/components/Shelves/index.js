import React, { useContext, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { BooksLibraryContext } from "../../App";
import Review from "../Review";

const Shelves = () => {
  const [index, setIndex] = useState("");
  const { shelfs, setShowReview } = useContext(BooksLibraryContext);

  const handleClickReview = (shelfIndex) => {
    setIndex(shelfIndex);
    setShowReview(true);
  };

  return (
    <Container className="py-5">
      {shelfs.length ? (
        shelfs.map((item, i) => (
          <Row key={i}>
            <Col>
              <Row className="py-5">
                <Col className="text-center">
                  <Row>
                    <Col>
                      <strong>Shelf: </strong>
                      {item.shelfName}
                    </Col>
                    <Col>
                      <strong>Category: </strong>
                      {item.shelfCategory}
                    </Col>
                  </Row>
                </Col>
                <Col className="text-center">
                  <Button onClick={() => handleClickReview(i)}>Review</Button>
                </Col>
              </Row>
              <Row>
                {item.bookList &&
                  item.bookList.map((elem, i) => (
                    <Col key={i} md={4}>
                      <img src={elem.image_url} alt={elem.title} />
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        ))
      ) : (
        <h4 className="py-5 text-center">No categories yet</h4>
      )}
      <Review shelf={index} />
    </Container>
  );
};

export default Shelves;
