import { faLocationDot, faTrash } from "@fortawesome/free-solid-svg-icons";
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

  const handleFormChange = (item, e) => {
    let data = [...site];
    data[item][e.target.name] = e.target.value;
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

    if (formData.allSites) return setPage(page + 1);

    site.map((item, i) => {
      if (!item.site) {
        setError("Site(s) left blank, please fill in or remove");
      } else if (item.site && !formData.allSites) {
        setPage(page + 1);
      }
    });
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
          <div className="sites-input">
            {site.map((item, i) => (
              <div key={i}>
                <div className="input-container ">
                  <FontAwesomeIcon icon={faLocationDot} className="fieldIcon" />
                  <input
                    type="text"
                    name="site"
                    defaultValue={item.site}
                    disabled={formData.allSites}
                    placeholder="Site"
                    onChange={(e) => handleFormChange(i, e)}></input>
                  {formData.allSites !== true && (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="end-icon delete-site"
                      onClick={(e) => removeField(i, e)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <button disabled={formData.allSites} onClick={addField}>
            Add +
          </button>
        </div>
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
