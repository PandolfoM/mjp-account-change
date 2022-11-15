import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faLock,
  faNetworkWired,
  faSignature,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Confirmation(props) {
  const { formData, page, setPage, site } = props;
  const [status, setStatus] = useState("Send");
  const [passwordShown, setPasswordShown] = useState(false);

  let displaySites = [];
  
  site.map((item, i) => {
    displaySites.push(item.site);
  });

  let filtered = displaySites.filter(function(el) {
    return el != ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    let formType;

    if (formData.type === "1") {
      formType = "Change Password";
    } else {
      formType = "New Account";
    }

    let details = {
      name: formData.name,
      network: formData.network,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      form: formType,
      sites: formData.allSites ? "All Sites" : displaySites.join(", "),
    };

    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    const sent = await response.json();
    if (sent === "error") {
      setStatus("Error!");
    } else {
      setPage(page + 1);
    }
  };

  return (
    <form className="form" noValidate onSubmit={handleSubmit}>
      <h2>Confirm Details</h2>
      <br />
      <h3>{formData.type === "1" ? "Change Password" : "New Account"}</h3>
      <div className="input-container">
        <FontAwesomeIcon icon={faLocationDot} className="fieldIcon" />
        <input
          type="text"
          defaultValue={
            formData.allSites === "1" ? "All Sites" : filtered.join(", ")
          }
          disabled
          placeholder="Sites"></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faSignature} className="fieldIcon" />
        <input
          type="text"
          disabled
          defaultValue={formData.name}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faNetworkWired} className="fieldIcon" />
        <input
          type="text"
          disabled
          defaultValue={formData.network}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faEnvelope} className="fieldIcon" />
        <input
          type="email"
          disabled
          defaultValue={formData.email}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faUser} className="fieldIcon" />
        <input
          type="text"
          disabled
          defaultValue={formData.username}></input>
      </div>

      <div className="input-container">
        <FontAwesomeIcon icon={faLock} className="fieldIcon" />
        <input
          type={passwordShown ? "text" : "password"}
          disabled
          defaultValue={formData.password}></input>
        <FontAwesomeIcon
          icon={passwordShown ? faEye : faEyeSlash}
          className="end-icon"
          onClick={() => setPasswordShown(!passwordShown)}
        />
      </div>

      <div className="interact-btns">
        <button onClick={() => setPage(page - 1)} className="nav-btn">
          Previous
        </button>
        <button type="submit" className="nav-btn">
          {status}
        </button>
      </div>
    </form>
  );
}

export default Confirmation;
