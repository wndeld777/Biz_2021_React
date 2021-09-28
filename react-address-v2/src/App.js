import "./App.css";
import { useState } from "react";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";

function App() {
  const [address, setAddress] = useState({
    u_name: "",
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });
  const [addrList, setAddrList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <AddressInput
          address={address}
          setAddress={setAddress}
          addrList={addrList}
          setAddrList={setAddrList}
        />
        <AddressView addrList={addrList} />
      </header>
    </div>
  );
}

export default App;
