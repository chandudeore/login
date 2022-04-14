import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
export const Register = () => {
  const navigate = useNavigate();
  const initstate = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const [user, setuser] = useState(initstate);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setuser((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = () => {
    axios
      .post("http://localhost:9999/register", user)
      .then((res) => {
        return navigate("/login");
      })
      .catch((err) => {
        alert("something went wrong try again !");
      });
  };
  const { first_name, last_name, email, password } = user;
  return (
    <div id="login_cover">
      <h1>REGISTER</h1>
      <input
        type="text"
        placeholder="Enter First name"
        value={first_name}
        name="first_name"
        onChange={handlechange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter last_name"
        value={last_name}
        name="last_name"
        onChange={handlechange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        name="email"
        onChange={handlechange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        name="password"
        onChange={handlechange}
      />
      <br />
      <button onClick={handlesubmit}>REGISTER</button>
    </div>
  );
};
