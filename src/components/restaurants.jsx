import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { logout } from "../redux/login/action";
import Loading from "./loading";
import RestaurentDetail from "./RestaurentDetail";

export const Restro = () => {
  const [rest, setRes] = useState([]);
  const dispatch = useDispatch();
  const { token, error, isAuthenticated, isloading } = useSelector(
    (state) => state.login
  );
  const getData = () => {
    axios
      .get("http://localhost:8080/get-restaurants")
      .then(({ data }) => setRes([...data]));
  };

  useEffect(() => {
    getData();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handlelogout = () => {
    dispatch(logout());
  };

  //console.log(rest);
  return (
    <div>
      {isloading ? <Loading /> : ""}
      <div id="logout_tab">
        <button onClick={handlelogout}>logout</button>
      </div>
      <h1>all restaurants</h1>

      <div>
        {rest.map((e) => {
          <RestaurentDetail
            key={e._id}
            name={e.name}
            category={e.category}
            image={e.image}
            rating={e.rating}
            reviews={e.reviews}
            votes={e.votes}
            cost={e.cost}
            payment_method={e.payment_method}
          ></RestaurentDetail>;
        })}
      </div>
    </div>
  );
};
