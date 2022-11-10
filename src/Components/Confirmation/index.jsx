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
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={formData.name} disabled></input>

      <label htmlFor="network">Network Name:</label>
      <input
        type="text"
        name="network"
        value={formData.network}
        disabled></input>

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={formData.email} disabled></input>

      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        disabled></input>

      <label htmlFor="password">Password:</label>
      <input
        type={passwordShown ? "text" : "password"}
        name="password"
        value={formData.password}
        disabled></input>
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
