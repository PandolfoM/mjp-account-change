import { useState } from "react";
import usePasswordValidation from "../../hooks/usePasswordValidation";
function Form(props) {
  const { formData, setFormData, page, setPage } = props;
  const [error, setError] = useState("");
  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      firstPassword: formData.password,
      secondPassword: formData.passwordConfirm,
    });

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
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" defaultValue={formData.name}></input>

      <label htmlFor="network">Network Name:</label>
      <input type="text" name="network" defaultValue={formData.network}></input>

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" defaultValue={formData.email}></input>

      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        defaultValue={formData.username}></input>

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        defaultValue={formData.password}></input>

      <label htmlFor="passwordConfirm">Confirm Password:</label>
      <input
        type="password"
        name="passwordConfirm"
        defaultValue={formData.passwordConfirm}></input>

      <ul>
        <li className={validLength ? "success" : "error"}>12 Characters</li>
        <li className={upperCase ? "success" : "error"}>Uppercase letter</li>
        <li className={hasNumber ? "success" : "error"}>At least 1 number</li>
        <li className={specialChar ? "success" : "error"}>At least 1 symbol</li>
        <li className={match ? "success" : "error"}>Passwords Match</li>
      </ul>

      {/* New user or change password */}
      <fieldset>
        <legend>Change Type</legend>
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
      </fieldset>

      {error && <h4 className="error">{error}</h4>}

      <div className="interact-btns">
        <button className="invisible"></button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default Form;
