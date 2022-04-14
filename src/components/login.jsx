import { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  login_failure,
  login_loading,
  login_success,
} from "../redux/login/action";
import { useNavigate, Navigate, link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);

  //console.log(isAuthenticated);

  if (isAuthenticated) {
    <Navigate to="/get-restrauants" />;
  }

  const init_userDetails = {
    email: "",
    password: "",
  };

  const [userDetails, setuserDetails] = useState(init_userDetails);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setuserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = () => {
    dispatch(login_loading());
    axios
      .post("http://localhost:9999/login", userDetails)
      .then((res) => {
        // console.log(".then");
        dispatch(login_success(res.data.token));
        navigate("/get-restrauants");
      })
      .catch((err) => {
        dispatch(login_failure());
        // console.log(".catch");
        alert("please enter valid credentials");
      });
  };
  const { email, password } = userDetails;
  return (
    <div id="login_cover">
      <h1>LOG-IN</h1>
      <input
        type="text"
        placeholder="enter email"
        name="email"
        value={email}
        onChange={handlechange}
      />
      <br />
      <input
        type="text"
        placeholder="enter password"
        name="password"
        value={password}
        onChange={handlechange}
      />
      <br />
      <button onClick={handlesubmit}>Log-In</button>
    </div>
  );
};
