import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLock,
  faNetworkWired,
  faSignature,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import usePasswordValidation from "../../hooks/usePasswordValidation";

function Form(props) {
  const { formData, setFormData, page, setPage } = props;
  const [error, setError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const errorTxt = useRef(null);

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      firstPassword: formData.password,
      secondPassword: formData.passwordConfirm,
    });

  useEffect(() => {
    if (errorTxt.current === null) return;
    setTimeout(() => {
      errorTxt.current.style.animation = "toast-slide-out 0.3s";
    }, 5000);
    setTimeout(() => {
      setError("");
    }, 5100);
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateInfo = (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (
      validLength &&
      hasNumber &&
      upperCase &&
      match &&
      specialChar &&
      formData.email.match(regex)
    ) {
      setError("");
      setPage(page + 1);
    }

    if (!formData.email.match(regex)) {
      return setError("Not a valid email!");
    }
    if (!validLength || !hasNumber || !upperCase || !match || !specialChar) {
      return setError("Password does not meet requirements!");
    }
  };

  return (
    <form
      className="form"
      noValidate
      onChange={handleChange}
      onSubmit={validateInfo}>
      <div className="input-container">
        <FontAwesomeIcon icon={faSignature} className="fieldIcon" />
        <input
          type="text"
          name="name"
          defaultValue={formData.name}
          placeholder="Name"></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faNetworkWired} className="fieldIcon" />
        <input
          type="text"
          name="network"
          defaultValue={formData.network}
          placeholder="Network Name"></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faEnvelope} className="fieldIcon" />
        <input
          type="email"
          name="email"
          defaultValue={formData.email}
          placeholder="Email"></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faUser} className="fieldIcon" />
        <input
          type="text"
          name="username"
          defaultValue={formData.username}
          placeholder="Username"></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faLock} className="fieldIcon" />
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          defaultValue={formData.password}
          placeholder="Password"></input>
        <FontAwesomeIcon
          icon={passwordShown ? faEye : faEyeSlash}
          className="togglePassword"
          onClick={() => setPasswordShown(!passwordShown)}
        />
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faLock} className="fieldIcon" />
        <input
          type={passwordShown ? "text" : "password"}
          name="passwordConfirm"
          defaultValue={formData.passwordConfirm}
          placeholder="Confirm Password"></input>
        <FontAwesomeIcon
          icon={passwordShown ? faEye : faEyeSlash}
          className="togglePassword"
          onClick={() => setPasswordShown(!passwordShown)}
        />
      </div>

      <ul className="passwordChecklist">
        <li className={validLength ? "success" : "error"}>12 Characters</li>
        <li className={upperCase ? "success" : "error"}>Uppercase letter</li>
        <li className={hasNumber ? "success" : "error"}>At least 1 number</li>
        <li className={specialChar ? "success" : "error"}>At least 1 symbol</li>
        <li className={match ? "success" : "error"}>Passwords Match</li>
      </ul>

      {/* New user or change password */}
      {/* <label>Type</label> */}
      <div className="inline-radio">
        <div>
          <input
            type="radio"
            id="changepass"
            name="type"
            value="1"
            defaultChecked={formData.type === "1"}></input>
          <label htmlFor="changepass">Change Password</label>
        </div>
        <div>
          <input
            type="radio"
            id="newpass"
            name="type"
            value="2"
            defaultChecked={formData.type === "2"}></input>
          <label htmlFor="newpass">New Account</label>
        </div>
      </div>

      <div className="error-container">
        {error && (
          <h4 ref={errorTxt} className="error form-error">
            {error}
          </h4>
        )}
      </div>

      <div className="interact-btns">
        <button type="submit" className="nav-btn">
          Next
        </button>
      </div>
    </form>
  );
}

export default Form;