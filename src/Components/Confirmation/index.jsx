import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Confirmation(props) {
  const { formData, setFormData, page, setPage } = props;
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <form className="form" noValidate>
      <h2>Confirm Details</h2>
      <h3>{formData.type === "1" ? "Change Password" : "New Account"}</h3>
      <input
        type="text"
        name="name"
        defaultValue={formData.name}
        placeholder="Name"></input>

      <input
        type="text"
        name="network"
        defaultValue={formData.network}
        placeholder="Network Name"></input>

      <input
        type="email"
        name="email"
        defaultValue={formData.email}
        placeholder="Email"></input>

      <input
        type="text"
        name="username"
        defaultValue={formData.username}
        placeholder="Username"></input>

      <input
        type={passwordShown ? "text" : "password"}
        name="password"
        defaultValue={formData.password}
        placeholder="Password"></input>
      <FontAwesomeIcon
        icon={faEye}
        className="togglePassword"
        onClick={() => setPasswordShown(!passwordShown)}
      />
      <div className="interact-btns">
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button>Finish</button>
      </div>
    </form>
  );
}

export default Confirmation;
