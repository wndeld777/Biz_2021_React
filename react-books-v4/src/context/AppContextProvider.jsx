import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

/**
 * Hook 함수
 * react 에서 state rendering 등을 관리하기 위한 함수 들
 * use 로 시작되는 함수들
 * useState(), useEffect(), useCallback(), useContext()
 *
 * react 가 초기에는 class 방식으로 코딩을 했다
 * class 방식은 기존의 JS 코드와 많이 문법적인 면들이 달라서
 * 함수방식을 도입한다 (16.x.x 버전에서)
 *
 * class 방식에서는 기본적으로 제공하는 약 10여가지 method가 있다
 * 이 method를 react 에서는 lifeCycle method 라고 불렀다
 * 프로젝트가 시작될때, rendering이 시작될때, rendering이 완료되었을때
 * 현재화면이 닫힐때 등등의 상황에서 event 를 일으키고
 *
 * 개발자가 그 상황을 변형해서 react 의 기능을 바꾸는 역할을 수행했다
 *
 * class 방식의 lifeCycle method 를 함수방식의 react 에서 구현하는 친구들
 * ==> Hook 함수들
 */

// user Hook
// react에서 기본적으로 제공하는 hook()을 Custumizing하기

// useContext()는 초기에 생성한 Context를 항상 import하여
// 매개변수로 전달해야 하는 불편함이 있다
// AppContext를 바라볼수 있는(직접접근할 수 있는) 곳에서
// useContext(Context)실행하여 매개변수를 지정하지 않아도
// 사용할수 있도록 변경한 Hook
// Hook은 무조건 use로 시작해야 한다.
// Camel Case 로 명명해야 한다
export const useBookContext = () => {
  return useContext(AppContext);
};

/**
 * 합성패턴을 사용하여 Context를 upgrade 하기
 * 1. state를 생성하고 관리(setState) 할 컴포넌트의 주요코드를
 * 이곳으로 이동하였다
 * 2. createContext()를 사용하여 Context 를 하나 생성
 * 3. <Context.Provider>로 시작되는 컴포넌트 코드로 변경
 * 4. 컴포넌트 함수의 매개변수에 {children} 을 추가
 * 5. 컴포넌트 body에 {children} 를 포함한다
 */
function AppContextProvider({ children }) {
  const [book, setBook] = useState({
    b_id: 0,
    b_name: "",
    b_genre: "",
  });
  const [bookList, setBookList] = useState([]);

  const providerData = { book, setBook, bookList, setBookList };
  return (
    <>
      <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
