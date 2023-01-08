import axios from "axios";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [cookie, setCookie] = useCookies(["userJWT"]);

  const navigate = useNavigate();

  const getData = async (token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let res;
    try {
      res = await axios.get("http://localhost:3000/users/profile", config);
      // console.log(res.data.user.name);
      setName(res.data.user.name);
      setEmail(res.data.user.email);
    } catch (err) {
      alert("Please login again!");
    }
  };

  useEffect(() => {
    if (!cookie.JWT) {
      navigate("/login");
    } else {
      getData(cookie.JWT);
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "5%" }}>
      <h1 style={{ color: "#3F3B6C", fontWeight: "bolder" }}>User Profile</h1>
      <MDBRow style={{ padding: "2%" }}>
        <MDBCol
          col="12"
          md="8"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontWeight: "bolder", fontSize: 20 }}>Name: {name}</p>
          <p style={{ fontWeight: "bolder", fontSize: 20 }}>Email: {email}</p>
        </MDBCol>
        <MDBCol
          col="12"
          md="4"
          style={{
            padding: "1%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            width="35%"
            src="woman.png"
            alt="user"
            className="p-3 shadow-2-strong rounded-circle"
            style={{ backgroundColor: "#A3C7D6" }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Profile;
