import { Button } from "@mui/material";
import { MDBCarousel, MDBCarouselItem, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <MDBCarousel showIndicators fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="images/slider1.png"
          alt="slider 1"
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="images/slider2.png"
          alt="slider 2"
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="images/slider3.png"
          alt="slider 3"
        />
      </MDBCarousel>
      <MDBRow style={{ margin: 0, padding: "3% 8%" }}>
        <h2 style={{ color: "#3F3B6C", fontWeight: "bolder" }}>Services</h2>
        <p style={{ fontSize: 22 }}>
          Explore a wide range of services and their related products provided by
          our company that make you life easier. Our services range from process
          automation and management to video calling and chats. Explore and
          subscribe to the suitable pacakges now.
        </p>
        <MDBRow style={{margin: 0}}>
          <MDBCol >
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
              <Link to="/services" style={{color: "white"}}>
              Explore >>
              </Link>
            </Button>
          </MDBCol>
        </MDBRow>
      </MDBRow>
    </div>
  );
};

export default Home;
