import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BooksLists from "./components/BooksLists";
import Shelves from "./components/Shelves";
import ShelfWithReview from "./components/ShelfWithReview";
import books from "./books.json";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

export const BooksLibraryContext = createContext({});

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [bookToGoToShelf, setBookToGoToShelf] = useState("");
  const [notes, setNotes] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [showReview, setShowReview] = useState(false);
  const [bookList, setBookList] = useState(books);
  const [shelfs, setShelfs] = useState([]);
  const [modalBookShow, setModalBookShow] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const contextValue = {
    bookList,
    shelfs,
    setShelfs,
    modalShow,
    setModalShow,
    setBookToGoToShelf,
    bookToGoToShelf,
    setNotes,
    setRadioValue,
    radioValue,
    notes,
    showReview,
    setShowReview,
    setBookList,
    modalBookShow,
    setModalBookShow,
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <BooksLibraryContext.Provider value={contextValue}>
          <GlobalStyles />
          <Menu toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/">
              <BooksLists />
            </Route>
            <Route path="/shelves">
              <Shelves />
            </Route>
            <Route path="/shelf-with-review">
              <ShelfWithReview />
            </Route>
          </Switch>
        </BooksLibraryContext.Provider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
