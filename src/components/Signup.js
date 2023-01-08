import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // cookie
  const [cookie, setCookie] = useCookies(["userJWT"]);

  // for error handling
  const [open, setOpen] = useState(false);
  const errMsg = "Email already registered";

  let navigate = useNavigate();

  const submitForm = async () => {
    let response;
    try {
      response = await axios.post("http://localhost:3000/users/signup", {
        name,
        email,
        password,
      });
    } catch (err) {
      setOpen(true);
      // console.log(err);
      // alert("Email is already registered");
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
          <img width="70%" src="images/programming.png" alt="programming" />
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
          <h1
            style={{ color: "#3F3B6C", fontWeight: "bolder", paddingTop: "5%" }}
          >
            Signup
          </h1>
          <form
            style={{ width: "100%", padding: "5%" }}
            // onSubmit={() => {
            //   console.log(email, password);
            // }}
          >
            <MDBInput
              className="mb-4"
              type="text"
              id="name"
              label="Name"
              required
              onChange={(value) => {
                setName(value.target.value);
              }}
            />
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
            <MDBInput
              className="mb-4"
              type="password"
              id="confirmpassword"
              label="Confirm Password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              required
              onChange={(value) => {
                setConfirmPassword(value.target.value);
              }}
            />

            <MDBBtn
              type="button"
              color="secondary"
              onClick={() => {
                submitForm();
              }}
              disabled={password != confirmPassword}
            >
              Signup
            </MDBBtn>

            <p style={{ paddingTop: "5%", margin: 0 }}>
              Already have an account?{" "}
              <a href="/login" style={{ textDecoration: "underline" }}>
                {" "}
                Login Now
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

export default Signup;
