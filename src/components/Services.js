import { Button } from "@mui/material";
import axios from "axios";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  const getData = async () => {
    let response;
    try {
      response = await axios.get("http://localhost:3000/services");
      console.log(response.data);
      setServices(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "3%" }}>
      <MDBRow style={{ margin: 0 }}>
        <h1 style={{ color: "#3F3B6C", fontWeight: "bolder" }}>Services</h1>
        <p style={{ fontSize: 20 }}>
          Following are a wide range of services containing mutiple products
          that are provided by our company to make you life easier. Our services
          range from process automation and management to video calling and
          chats. Explore and subscribe to the suitable pacakges now.
        </p>
      </MDBRow>
      <MDBRow style={{ margin: 0 }}>
        {services.map((item, index) => (
          <div
            style={{
              padding: "3%",
              boxShadow: "1px 2px 5px #848484",
              margin: "2% 0%",
            }}
          >
            <MDBRow style={{ margin: 0 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <h3 style={{ color: "#3F3B6C", fontWeight: "bolder" }}>
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: 20,
                    width: "70%",
                    padding: "2%",
                    textAlign: "left",
                  }}
                >
                  {item.detail}
                </p>
              </div>
            </MDBRow>

            <MDBRow style={{ margin: 0 }}>
              <MDBCol offsetMd="9">
                <Button
                  sx={{
                    backgroundColor: "#624F82",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#3F3B6C",
                      boxShadow: "1px 2px 5px #848484",
                    },
                  }}
                  size="large"
                  variant="filled"
                  title="View Services"
                >
                  <Link to={`/services/${item._id}/products`} style={{ color: "white" }}>
                    Explore Products >>
                  </Link>
                </Button>
              </MDBCol>
            </MDBRow>
          </div>
        ))}
      </MDBRow>
    </div>
  );
};

export default Services;
