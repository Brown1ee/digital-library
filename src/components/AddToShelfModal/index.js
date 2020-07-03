import React, { useContext, useState } from "react";
import { Modal, Card, Alert, ButtonGroup, ToggleButton } from "react-bootstrap";
import { BooksLibraryContext } from "../../App";
import { useHistory } from "react-router-dom";

const AddToShelfModal = (props) => {
  const [radioValue, setRadioValue] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const history = useHistory();
  const { shelfs, setShelfs, bookToGoToShelf } = useContext(
    BooksLibraryContext
  );

  const handleClick = (shelf, val) => {
    const shelfIndex = shelfs.findIndex((item) => item.shelfName === shelf);
    const newArray = [...shelfs];

    if (
      newArray[shelfIndex].bookList.indexOf(bookToGoToShelf) === -1 &&
      newArray[shelfIndex].shelfCategory === bookToGoToShelf.category
    ) {
      newArray[shelfIndex].bookList.push(bookToGoToShelf);
      setShelfs(newArray);
      setRadioValue(val);
      history.push("/shelves");
    } else {
      setAlertStatus(
        "This book was already added to this shelf! or has different category than the shelf"
      );
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
        <Card className="py-5">
          <Card.Body>
            <h4 className="font-weight-bold">Which shelf?</h4>
            {alertStatus && (
              <Alert key={3} variant="danger">
                {alertStatus}
              </Alert>
            )}
            <ButtonGroup toggle>
              {shelfs &&
                shelfs.map((item, i) => (
                  <ToggleButton
                    key={i}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={i}
                    checked={radioValue === i}
                    onChange={(e) =>
                      handleClick(item.shelfName, e.currentTarget.value)
                    }
                  >
                    {`${item.shelfName} ${item.shelfCategory}`}
                  </ToggleButton>
                ))}
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AddToShelfModal;
