import React from "react";

const write = (props) => {
  const { fd, onChnageHandle } = props;
  return (
    <div>
      <p>
        <input
          name="f_name"
          defaultValue={fd.f_name}
          onChange={onChnageHandle}
        />
      </p>
      <p>
        <input
          name="f_addr"
          defaultValue={fd.f_addr}
          onChange={onChnageHandle}
        />
      </p>
    </div>
  );
};

export default write;
