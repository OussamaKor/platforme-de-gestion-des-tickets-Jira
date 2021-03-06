import React, { useState } from "react";
import logo from "../../Assets/images/1.png";
import image from "../../Assets/images/2.jpg";

import Alert from "react-bootstrap/Alert";
import ReactLoading from "react-loading";

import "../../Assets/css/Signup.style.css";
import { useNavigate } from "react-router-dom";
import PostData from "../../Actions/SignupAction"

export default function Signup() {
  const Navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jira_token, setJira_token] = useState("");
  const [jira_domaine, setJira_domaine] = useState("");
  

  const informations={"setName":setName,"name":name,"setJira_token":setJira_token,"setJira_domaine":setJira_domaine,"jira_token":jira_token,"jira_domaine":jira_domaine,"email":email,"password":password,"error":error,"success":success,"loading":loading,"setEmail":setEmail,"setPassword":setPassword,"setError":setError,"setSuccess":setSuccess,"setLoading":setLoading,"Navigate":Navigate}


  const [checkvalue, setCheckvalue] = useState("");
  const AjoutChamps = () => {
    if (checkvalue === "music") {
      setCheckvalue("");
    } else {
      setCheckvalue("music");
    }
  };
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <br />
      <Alert show={success} variant={"success"} style={{ width: "400px", height: "70", margin: "auto auto" }}>
        {"Account is created"}
      </Alert>
      <Alert show={error} variant={"danger"} style={{ width: "400px", height: "70", margin: "auto auto" }}>
        {"Check your informations"}
      </Alert>
      <form onSubmit={(e) => {e.preventDefault();PostData(informations)}}>
      <div className="containerSignup">
        <div className="form-box-Signup">
          <img alt="" src={logo} className="photo-Mod" onClick={()=>Navigate("/")}/>
          <div className="ContainerInput" style={{ paddingTop: "50px" }}>
            <label className="InputName">Username</label>
            <input
              type="text"
              className="input-Style"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="ContainerInput">
            <label className="InputName">Email</label>
            <input
              type="email"
              className="input-Style"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="ContainerInput">
            <label className="InputName">Password</label>
            <input
              type="password"
              className="input-Style"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="ContainerCheck">
            <fieldset className="border p-1">
              <legend className="legendStyle float-none w-auto p-2">Check it if you have an account Jira</legend>
              <div>
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                  onChange={() => AjoutChamps()}
                />
                <label for="music" className="labelStyle">
                  I have a Jira account{" "}
                </label>
              </div>
              {checkvalue === "music" ? (
                <div>
                  <div className="ContainerInput">
                    <label className="InputName">Jira token</label>
                    <input
                      className="input-Style"
                      type="text"
                      value={jira_token}
                      onChange={(e) => setJira_token(e.target.value)}
                    />
                  </div>
                  <div className="ContainerInput">
                    <label className="InputName">Jira domain</label>
                    <input
                      type="text"
                      className="input-Style"
                      value={jira_domaine}
                      onChange={(e) => setJira_domaine(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </fieldset>
          </div>
          <button
            className="btn-Style"
            
            disabled={loading}
            type="submit"
          >
            {loading ? (
                <ReactLoading
                    height={"30px"}
                    width={"30px"}
                    type="spin"
                    className="loadingSpin"
                />
            ) : (
                "Submit"
            )}
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}
