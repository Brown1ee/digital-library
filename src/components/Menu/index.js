import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateShelfModal from "../CreateShelfModal";
import { BooksLibraryContext } from "../../App";

const Menu = ({ toggleTheme }) => {
  const { modalShow, setModalShow } = useContext(BooksLibraryContext);
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand>
          <Navbar.Text>
            <Link to="/">Books library</Link>
          </Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Text className="px-2">
              <Link to="/shelves">Shelves</Link>
            </Navbar.Text>
            <Navbar.Text className="px-2">
              <Link to="/shelf-with-review">Shelf with Review</Link>
            </Navbar.Text>
          </Nav>
          <Navbar.Text className="px-2 ml-auto">
            <Button onClick={() => setModalShow(true)}>Create shelf</Button>
          </Navbar.Text>
          <Navbar.Text className="px-2 ml-5">
            <Button onClick={() => toggleTheme()}>Change theme</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <CreateShelfModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Menu;
