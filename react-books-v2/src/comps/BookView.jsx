import React, { useContext } from "react";
import BookList from "./BookList";
import BookContext from "../context/BookContext";

function BookView() {
  const { book } = useContext(BookContext);
  return (
    <div>
      <p>입력된 도서명 : {book.b_name}</p>
      <p>입력된 장르 : {book.b_genre}</p>
      <BookList />
    </div>
  );
}

export default BookView;
