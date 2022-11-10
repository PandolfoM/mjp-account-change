function SelectType(props) {
  const { formData, setFormData, page, setPage } = props;

  return (
    <form >
      <div>
        {/* username and password */}
        <input type="radio" id="changepass" name="selectType" onChange={(e) => setFormData({...formData, type: 1})} defaultChecked></input>
        <label htmlFor="changepass">Change Password</label>
      </div>
      <div>
        {/* username, password */}
        {/* all stores or select stores */}
        <input type="radio" id="newpass" name="selectType" onChange={(e) => setFormData({...formData, type: 2})}></input>
        <label htmlFor="newpass">New User Account</label>
      </div>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </form>
  );
}

export default SelectType;
