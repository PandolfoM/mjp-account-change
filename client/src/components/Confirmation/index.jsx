import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLock,
  faNetworkWired,
  faSignature,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Confirmation(props) {
  const { formData, setFormData, page, setPage } = props;
  const [status, setStatus] = useState("Finish");
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    let formType;

    if (formData.type === "1") {
      formType = "Change Password";
    } else {
      formType = "New Account";
    }

    let details = {
      name: formData.name,
      network: formData.network,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      form: formType,
    };

    await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    })
      .then(setPage(page + 1))
      .catch(setStatus("Error"));
  };

  return (
    <form className="form" noValidate onSubmit={handleSubmit}>
      <h2>Confirm Details</h2>
      <br />
      <h3>{formData.type === "1" ? "Change Password" : "New Account"}</h3>
      <div className="input-container">
        <FontAwesomeIcon icon={faSignature} className="fieldIcon" />
        <input
          type="text"
          name="name"
          disabled
          defaultValue={formData.name}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faNetworkWired} className="fieldIcon" />
        <input
          type="text"
          name="network"
          disabled
          defaultValue={formData.network}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faEnvelope} className="fieldIcon" />
        <input
          type="email"
          name="email"
          disabled
          defaultValue={formData.email}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faUser} className="fieldIcon" />
        <input
          type="text"
          name="username"
          disabled
          defaultValue={formData.username}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faLock} className="fieldIcon" />
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          disabled
          defaultValue={formData.password}></input>
        <FontAwesomeIcon
          icon={passwordShown ? faEye : faEyeSlash}
          className="togglePassword"
          onClick={() => setPasswordShown(!passwordShown)}
        />
      </div>

      <div className="interact-btns">
        <button onClick={() => setPage(page - 1)} className="nav-btn">
          Previous
        </button>
        <button type="submit" className="nav-btn">
          {status}
        </button>
      </div>
    </form>
  );
}

export default Confirmation;
