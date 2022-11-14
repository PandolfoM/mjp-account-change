import { useState } from "react";
import AccountType from "./components/AccountType";
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";
import Success from "./components/Success";
import "./index.css";

function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    type: "1",
    network: "",
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    allSites: true,
    sites: "",
  });

  const componentList = [
    <AccountType
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Form
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Confirmation
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Success />,
  ];

  return <div className="container">{componentList[page]}</div>;
}

export default App;
