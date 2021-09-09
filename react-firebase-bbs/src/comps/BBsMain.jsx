import React from "react";
import "../css/bbsmain.css";

function BBsMain() {
  return (
    <div className="main">
      <tr>
        <th>작성일자</th>
        <th>작성시각</th>
        <th>작성자</th>
        <th>제목</th>
      </tr>
      <tr>
        <td>2021-09-08</td>
        <td>18:28:28</td>
        <td>조혜승</td>
        <td>BBS</td>
      </tr>
    </div>
  );
}

export default BBsMain;
