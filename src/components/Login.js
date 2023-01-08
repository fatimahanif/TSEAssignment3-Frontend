import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // cookie
  const [cookie, setCookie] = useCookies(["userJWT"]);

  // error handling
  const [open, setOpen] = useState(false);
  const errMsg = "Incorrect username or password";

  let navigate = useNavigate();

  const submitData = async () => {
    let response;
    try {
      response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
    } catch (err) {
      // alert("Incorrect username or password");
      // console.log(err);
      setOpen(true);
    }
    console.log(response.data.data.token);
    setCookie("JWT", response.data.data.token, { path: "/" });
    navigate("/profile");
  };

  return (
    <div style={{ padding: "8% 12%", backgroundColor: "#ffffff" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          boxShadow: "1px 2px 9px #848484",
        }}
      >
        <MDBCol
          col="12"
          md="6"
          style={{
            backgroundColor: "#A3C7D6",
            padding: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img width="70%" src="programming.png" alt="programming" />
        </MDBCol>
        <MDBCol
          col="12"
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "center",
            borderColor: "#A3C7D6",
            borderWidth: 2,
          }}
        >
          <h1 style={{ color: "#3F3B6C", fontWeight: "bolder" }}>Login</h1>
          <form
            style={{ width: "100%", padding: "5%" }}
            onSubmit={() => {
              // console.log(email, password);
              submitData();
            }}
          >
            <MDBInput
              className="mb-4"
              type="email"
              id="email"
              label="Email address"
              required
              onChange={(value) => {
                setEmail(value.target.value);
              }}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="password"
              label="Password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              required
              onChange={(value) => {
                setPassword(value.target.value);
              }}
            />

            <MDBBtn type="button" color="secondary" onClick={submitData}>
              Login
            </MDBBtn>

            <p style={{ paddingTop: "5%", margin: 0 }}>
              Don't have an account?{" "}
              <a href="/signup" style={{ textDecoration: "underline" }}>
                {" "}
                Register Now
              </a>
            </p>
          </form>
        </MDBCol>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <Alert
          onClose={() => {
            setOpen(!open);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errMsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
