import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#624F82" }}
      className=" text-center text-white"
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://facebook.com/"
            role="button"
            style={{ padding: "1%", borderRadius: "10%" }}
          >
            <MDBIcon fab icon="facebook-f" size="2x" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://twitter.com/fatima__hanif"
            role="button"
            style={{ padding: "1%", borderRadius: "10%" }}
          >
            <MDBIcon fab icon="twitter" size="2x" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://www.instagram.com/fatimaaa_hanif/"
            role="button"
            style={{ padding: "1%", borderRadius: "10%" }}
          >
            <MDBIcon fab icon="instagram" size="2x" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://www.linkedin.com/in/fatima-hanif-30a5931b1/"
            role="button"
            style={{ padding: "1%", borderRadius: "10%" }}
          >
            <MDBIcon fab icon="linkedin-in" size="2x" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://github.com/fatimahanif"
            role="button"
            style={{ padding: "1%", borderRadius: "10%" }}
          >
            <MDBIcon fab icon="github" size="2x" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "#3F3B6C" }}>
        © 2022 Copyright
        <a className="text-white" href="/">
          <span> </span> Coft-Tech
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
