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
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <form className="form" noValidate onSubmit={() => setPage(page + 1)}>
      <h2>Confirm Details</h2>
      <br />
      <h3>{formData.type === "1" ? "Change Password" : "New Account"}</h3>
      <div className="input-container">
        <FontAwesomeIcon icon={faSignature} className="fieldIcon" />
        <input type="text" name="name" value={formData.name}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faNetworkWired} className="fieldIcon" />
        <input type="text" name="network" value={formData.network}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faEnvelope} className="fieldIcon" />
        <input type="email" name="email" value={formData.email}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faUser} className="fieldIcon" />
        <input type="text" name="username" value={formData.username}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faLock} className="fieldIcon" />
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          value={formData.password}></input>
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
          Finish
        </button>
      </div>
    </form>
  );
}

export default Confirmation;
