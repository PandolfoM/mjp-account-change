import { useState } from "react";
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
  });

  const componentList = [
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
