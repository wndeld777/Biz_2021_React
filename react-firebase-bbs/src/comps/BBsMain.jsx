import React, { useCallback, useEffect, useState } from "react";
import "../css/bbsmain.css";
import { firestore } from "../config/FirebaseConfig";
import { useHistory } from "react-router-dom";

function BBsMain() {
  const router = useHistory();
  const [bbsData, setBBsData] = useState([]);
  const firebaseFetch = async () => {
    const result = await firestore
      .collection("bbs")
      .orderBy("b_date", "desc")
      .orderBy("b_time", "desc")
      .get();

    const bbsList = result.docs.map((doc) => {
      const id = doc.id;
      return { ...doc.data(), id: id };
    });
    setBBsData(bbsList);
  };
  const fetchCallback = useCallback(firebaseFetch, []);
  useEffect(fetchCallback, [fetchCallback]);

  bbsBody = bbsData.map((bbs) => {
    return (
      <tr
        key={bbs_id}
        data-id={bbs_id}
        onClick={(e) => {
          const id = e.target.closest("TR").dataset.id;
          router.push(`/detail/${id}`);
        }}
      >
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_subject}</td>
      </tr>
    );
  });

  return (
    <table className="bbs_list">
      <thead>
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>{bbsBody}</tbody>
    </table>
  );
}

export default BBsMain;
