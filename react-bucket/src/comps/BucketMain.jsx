import React from "react";
import "../css/main.css";

function BucketMain() {
  return (
    <div className="main">
      <input placeholder="버킷에 추가할 내용을 입력하세요..." />
      <div className="main_list">
        <tr>
          <th>FLAG</th>
          <th>날짜</th>
          <th>BUCKET</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
        <tr>
          <td>일반</td>
          <td>2021-09-01 00:00:00</td>
          <td>리액트 정복</td>
          <td>◎</td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
        <tr>
          <td>중요</td>
          <td>2021-09-13 00:00:00</td>
          <td>제주도 여행가기</td>
          <td>2021-09-14 10:10:31</td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
      </div>
    </div>
  );
}

export default BucketMain;
