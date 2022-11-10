import { useState } from "react";
function Form(props) {
  const { formData, setFormData, page, setPage } = props;
  const [error, setError] = useState("");
  const [passValid, setPassValid] = useState({
    charCount: "red",
    uppercase: "red",
    number: "red",
    symbol: "red",
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
    if (formData.password !== formData.passwordConfirm) {
      return setError("Passwords do not match!");
    }
    if (!formData.email.match(regex)) {
      return setError("Not a valid email!");
    }
    setPage(page + 1);
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

      {/* <ul>
        <li style={{ color: passValid.charCount }}>12 Characters</li>
        <li style={{ color: passValid.uppercase }}>Uppercase letter</li>
        <li style={{ color: passValid.number }}>At least 1 number</li>
        <li style={{ color: passValid.symbol }}>At least 1 symbol</li>
      </ul> */}

      <label htmlFor="passwordConfirm">Confirm Password:</label>
      <input
        type="password"
        name="passwordConfirm"
        defaultValue={formData.passwordConfirm}></input>

      {/* <PasswordChecklist
        rules={["minLength", "specialChar", "number", "capital", "match"]}
        minLength={12}
        value={formData.password}
        valueAgain={formData.passwordConfirm}
      /> */}

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
          <label htmlFor="newpass">New User Account</label>
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
