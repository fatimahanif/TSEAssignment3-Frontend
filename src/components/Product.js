import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MDBRow } from "mdb-react-ui-kit";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({
    name: "",
    detail: "",
    service: { name: "" },
  });

  const getData = async () => {
    let response;
    try {
      response = await axios.get(`http://localhost:3000/products/${productId}`);
      // console.log(productId)
      // console.log(response.data);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "5%" }}>
      <MDBRow style={{ margin: 0, padding: "0% 0% 3% 0%" }}>
        <h1 style={{ color: "#3F3B6C", fontWeight: "bolder" }}>
          Product Details
        </h1>
      </MDBRow>
      <p style={{ fontSize: 20, textAlign: "left", fontWeight: "bolder" }}>
        Product Name:{" "}
        <span style={{ fontWeight: "lighter" }}>{product.name}</span>
      </p>
      <p style={{ fontSize: 20, textAlign: "left", fontWeight: "bolder" }}>
        Service Name:{" "}
        <span>
          <Link to={`/services/${product.service._id}/products`}>
            {product.service.name}
          </Link>
        </span>
      </p>
      <p style={{ fontSize: 20, textAlign: "left", fontWeight: "bolder" }}>
        Product Detail:{" "}
        <span style={{ fontWeight: "lighter" }}>{product.detail}</span>
      </p>
    </div>
  );
};

export default Product;
