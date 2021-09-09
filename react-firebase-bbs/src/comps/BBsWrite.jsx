import React from "react";
import "../css/write.css";

function BBsWrite() {
  return (
    <div className="bbs_write">
      <div>
        <input placeholder="작성자" />
      </div>
      <div>
        <input placeholder="제목" />
      </div>
      <div>
        <input placeholder="내용" />
      </div>
      <div>
        <button>저장</button>
      </div>
    </div>
  );
}

export default BBsWrite;
