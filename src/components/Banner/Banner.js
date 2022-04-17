import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../img/bnr1.jpg";
import banner2 from "../../img/bnr2.jpg";
import banner3 from "../../img/bnr3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 img" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>-EXPLORE CITIES-</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 img "
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>-EXPLORE FOUNTAIN-</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h3>-EXPLORE MOUNTAIN-</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
