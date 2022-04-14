import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { Restro } from "./components/restaurants";
import { useSelector } from "react-redux";
import PageNotFound from "./components/pageNotFound";

function PrivetRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route
          path="/get-restrauants"
          element={
            <PrivetRoute isAuthenticated={isAuthenticated}>
              <Restro />
            </PrivetRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
