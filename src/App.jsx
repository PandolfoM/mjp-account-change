import { useState } from "react";
import AccountInfo from "./Components/AccountInfo";
import SelectType from "./Components/SelectType";
import "./index.css";

function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    type: 1,
  });

  const componentList = [
    <SelectType
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <AccountInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
  ];
  //todo password = 12 char, case change, number, symbol
  // ! Stages :
  // ! 1: change type
  // ! 2: enter change details
  // ! 3: confirm changes
  return (
    <div className="container">
      <h1>MJP Form</h1>
      {componentList[page]}
    </div>
  );
}

export default App;
