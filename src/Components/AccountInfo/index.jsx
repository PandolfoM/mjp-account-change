function AccountInfo(props) {
  const { page, setPage } = props;

  return (
    <form>
      {/* persons name */}
      <label htmlFor="user">Name:</label>
      <input type="user" name="user"></input>

      {/* business name */}
      <label htmlFor="network">Network Name:</label>
      <input type="network" name="network"></input>

      {/* email */}
      <label htmlFor="email">Email:</label>
      <input type="email" name="email"></input>

      {/* password */}
      <label htmlFor="password">Password:</label>
      <input type="password" name="password"></input>

      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </form>
  );
}

export default AccountInfo;
