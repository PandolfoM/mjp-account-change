import {
  faLocationDot,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function AccountType(props) {
  const { formData, setFormData, page, setPage, site, addSite } = props;
  const [error, setError] = useState("");
  const errorTxt = useRef(null);

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

  const handleFormChange = (item, e) => {
    const limit = 6;
    let data = [...site];
    data[item][e.target.name] = e.target.value.slice(0, limit);
    addSite(data);
  };

  const addField = (e) => {
    e.preventDefault();
    let newSite = { site: "" };
    addSite([...site, newSite]);
  };

  const removeField = (i, e) => {
    e.preventDefault();
    let data = [...site];
    data.splice(i, 1);
    addSite(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.allSites === "0" && formData.type !== "1") return setError("User sites not chosen");
    setPage(page + 1);
  };

  return (
    <form className="form" noValidate onChange={handleChange}>
      <h2>Select Account Type</h2>
      <h4>Do you need to update a password or create a new user?</h4>
      <div className="inline-radio">
        <div>
          <input
            type="radio"
            id="changepass"
            name="type"
            value="1"
            defaultChecked={formData.type === "1"}></input>
          <label htmlFor="changepass">Update Password</label>
        </div>
        <div>
          <input
            type="radio"
            id="newpass"
            name="type"
            value="2"
            defaultChecked={formData.type === "2"}></input>
          <label htmlFor="newpass">New User</label>
        </div>
      </div>
      {formData.type === "2" && (
        <>
          <h5 className="prompt">
            Will the user need access to all sites or specific sites?
          </h5>
          <div className="sites">
            <div className="inline-radio">
              <div>
                <input
                  type="radio"
                  id="all-sites"
                  name="allSites"
                  value="1"></input>
                <label htmlFor="all-sites">All Sites</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pcNumbers"
                  name="allSites"
                  value="2"></input>
                <label htmlFor="pcNumbers">PC Numbers</label>
              </div>
            </div>
            {formData.allSites === "2" && (
              <>
                <div className="sites-input">
                  {site.map((item, i) => (
                    <div key={i}>
                      <div className="input-container ">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="fieldIcon"
                        />
                        <input
                          type="number"
                          name="site"
                          pattern="\d*"
                          value={item.site}
                          disabled={formData.allSites === "1"}
                          placeholder="PC Number (Max 6 Digits)"
                          onChange={(e) => handleFormChange(i, e)}
                          required></input>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="end-icon delete-site"
                          onClick={(e) => removeField(i, e)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  disabled={formData.allSites === "1"}
                  onClick={addField}
                  className="addPC">
                  Add PC <FontAwesomeIcon icon={faPlus} />
                </button>
              </>
            )}
          </div>
        </>
      )}
      <div className="error-container">
        {error && (
          <h4 ref={errorTxt} className="error form-error">
            {error}
          </h4>
        )}
      </div>
      <div className="interact-btns">
        <button className="nav-btn" onClick={handleFormSubmit}>
          Next
        </button>
      </div>
    </form>
  );
}

export default AccountType;
