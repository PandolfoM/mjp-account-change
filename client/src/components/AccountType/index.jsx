import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AccountType(props) {
  const { formData, setFormData, page, setPage } = props;

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "allSites") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <form className="form" noValidate onChange={handleChange}>
      <h2>Select Account Type</h2>
      <br />
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
      {formData.type === "2" && (
        <div className="sites">
          <input
            type="checkbox"
            name="allSites"
            id="allSites"
            defaultChecked={formData.allSites}></input>
          <label htmlFor="allSites">All Sites</label>
          <div className="input-container sites-input">
            <FontAwesomeIcon icon={faLocationDot} className="fieldIcon" />
            <input
              type="text"
              name="sites"
              defaultValue={formData.sites}
              disabled={formData.allSites}
              placeholder="Sites"></input>
          </div>
        </div>
      )}
      <div className="interact-btns">
        <button className="nav-btn" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </form>
  );
}

export default AccountType;
