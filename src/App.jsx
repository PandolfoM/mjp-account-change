import "./index.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  //todo password = 12 char, case change, number, symbol
  return (
    <div className="container">
      <h1>MJP Form</h1>
      <form onSubmit={handleSubmit}>
        <legend>Update Password</legend>
        <label htmlFor="user">Name:</label>
        <input type="user" name="user"></input>
        <label htmlFor="network">Network Name:</label>
        <input type="network" name="network"></input>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input>
        <div>
          {/* username, password */}
          {/* all stores or select stores */}
          <input type="radio" id="newpass" name="selectType"></input>
          <label htmlFor="newpass">New User Account</label>
        </div>
        <div>
          {/* username and password */}
          <input type="radio" id="changepass" name="selectType"></input>
          <label htmlFor="changepass">Change Password</label>
        </div>
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
}

export default App;
