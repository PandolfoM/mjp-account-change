function Confirmation(props) {
  const { formData, setFormData, page, setPage } = props;

  return (
    <div className="form">
      <h2>Confirm Details</h2>
      <h3>{formData.type === "1" ? "Change Password" : "New Account"}</h3>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Network: {formData.network}</li>
        <li>Email: {formData.email}</li>
        <li>Username: {formData.username}</li>
        <li>Password: {formData.password}</li>
      </ul>
      <div className="interact-btns">
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button>Finish</button>
      </div>
    </div>
  );
}

export default Confirmation;
