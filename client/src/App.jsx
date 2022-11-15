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
    allSites: "1",
  });
  const [site, addSite] = useState([{ site: "" }]);

  const componentList = [
    <AccountType
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      site={site}
      addSite={addSite}
    />,
    <Form
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Confirmation
      formData={formData}
      page={page}
      setPage={setPage}
      site={site}
    />,
    <Success />,
  ];

  return <div className="container">{componentList[page]}</div>;
}

export default App;
