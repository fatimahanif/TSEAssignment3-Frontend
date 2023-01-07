import { MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          <h1
            style={{ color: "#3F3B6C", fontWeight: "bolder", paddingTop: "5%" }}
          >
            Signup
          </h1>
          <form
            style={{ width: "100%", padding: "5%" }}
            onSubmit={() => {
              console.log(email, password);
            }}
          >
            <MDBInput
              className="mb-4"
              type="text"
              id="name"
              label="Name"
              onChange={(value) => {
                setName(value.target.value);
              }}
            />
            <MDBInput
              className="mb-4"
              type="email"
              id="email"
              label="Email address"
              onChange={(value) => {
                setEmail(value.target.value);
              }}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="password"
              label="Password"
              onChange={(value) => {
                setPassword(value.target.value);
              }}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="confirmpassword"
              label="Confirm Password"
              onChange={(value) => {
                setConfirmPassword(value.target.value);
              }}
            />

            <MDBBtn type="submit" color="secondary">
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
    </div>
  );
};

export default Signup;
