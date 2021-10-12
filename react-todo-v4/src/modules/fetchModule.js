const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  credentials: "include",
};

const fetchLogin = async ({ userid, password }) => {
  // 이미 선언된 fetchOption 에 body 속성을 추가하기
  fetchOption.body = JSON.stringify({ userid, password });
  // body : {userid : userid, password : password} 중복됐을경우 한번만 써도 된다

  const response = await fetch(
    "http://localhost:8080/users/login",
    fetchOption
  );

  if (response.ok) {
    const resultUser = await response.json();
    return resultUser;
  }
};

const fetchUser = async () => {
  const response = await fetch("http://localhost:8080/users");
  if (response.ok) {
    const resultUser = response.json();
    return resultUser;
  } else {
    return [];
  }
};

export { fetchLogin, fetchUser };
