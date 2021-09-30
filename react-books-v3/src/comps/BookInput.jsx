import React from "react";
import "../css/BookInput.css";

function BookInput() {
  return (
    <div className="book_input">
      <div>
        <label>도서명</label>
        <input type="text" />
      </div>
      <div>
        <label>장르</label>
        <input type="text" />
      </div>
      <div>
        <button>리스트 추가</button>
      </div>
    </div>
  );
}

export default BookInput;
