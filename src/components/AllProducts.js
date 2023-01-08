import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState("");
  const [products, setProducts] = useState([]);

  const getData = async () => {
    let response;
    try {
      response = await axios.get(`http://localhost:3000/${serviceId}/products`);
      // console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getService = async () => {
    let response;
    try {
      response = await axios.get(`http://localhost:3000/service/${serviceId}`);
      // console.log(response.data.name);
      setService(response.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getService();
  }, []);

  return (
    <div style={{ padding: "3%" }}>
      <MDBRow style={{ margin: 0 }}>
        <h1 style={{ color: "#3F3B6C", fontWeight: "bolder" }}> Products</h1>
        <p style={{ fontSize: 20 }}>
          Following are are the products under the service: "
          <span style={{ fontWeight: "bolder" }}>{service}</span>".
        </p>
      </MDBRow>
      <MDBRow style={{ margin: 0 }}>
        <MDBRow
          style={{
            margin: 0,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {products.map((item, index) => (
            <MDBCol md="5" className="my-4">
              <MDBCard className="p-4" style={{ backgroundColor: "#624F82" }}>
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      fontSize: 26,
                      color: "#fff",
                      fontWeight: "bolder",
                    }}
                  >
                    {item.name}
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      fontSize: 20,
                      color: "#fff",
                      fontWeight: "lighter",
                    }}
                  >
                    {item.detail}
                  </MDBCardText>
                </MDBCardBody>
                <Button
                  sx={{
                    borderColor: "#fff",
                    width: "40%",
                    alignSelf: "center",
                    "&:hover": {
                      borderColor: "#fff",
                      borderWidth: 2,
                    },
                  }}
                  size="large"
                  variant="outlined"
                  title="View Product Details"
                >
                  <Link
                    to={`/products/${item._id}`}
                    style={{ color: "white" }}
                  >
                    View Details >>
                  </Link>
                </Button>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBRow>
    </div>
  );
};

export default AllProducts;
