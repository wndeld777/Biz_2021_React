import React from "react";
import { Route } from "react-router-dom";
import BookInput from "./BookInput";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
 * NavLink를 클릭했을때 선택적으로 화면을 보여주기
 */
function BookMain() {
  return (
    <>
      <Route path="/" exact>
        여기는 홈 화면
      </Route>
      <Route path="/insert" component={BookInput} exact></Route>
      <Route path="/list" exact>
        여기는 리스트보이기
      </Route>
    </>
  );
}

export default BookMain;
