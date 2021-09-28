import React from "react";

function AddressInput(props) {
  const { address, setAddress, addrList, setAddrList } = props;
  const onChangeHandler = (e) => {
    setAddress({
      u_name: e.target.value,
      u_addr: e.target.value,
    });
  };

  const addrInsert = () => {
    setAddrList([...addrList, address]);
  };

  return (
    <div className="input_form">
      <div>
        <label>이름</label>
        <input
          name="u_name"
          type="text"
          defaultValue={address.u_name}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>주소</label>
        <input
          name="u_addr"
          type="text"
          defaultValue={address.u_addr}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>전화번호</label>
        <input
          name="u_tel"
          type="text"
          defaultValue={address.u_tel}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>나이</label>
        <input
          name="u_age"
          type="text"
          defaultValue={address.u_age}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button onClick={addrInsert}>추가하기</button>
      </div>
    </div>
  );
}

export default AddressInput;
