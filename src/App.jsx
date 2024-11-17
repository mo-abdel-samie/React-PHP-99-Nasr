import Footer from "./components/Footer";
import Logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import "./main.css";
import ProductImg1 from "./imgs/pexels-jeshoots-3510.jpg";

import Style from "./style.module.css";
import MainNavbar from "./components/MainNavbar";
import ProductCard from "./components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

export default function App() {
  let userName = "Mohamed";
  let userAge = 15;

  const products = [
    {
      title: "Product 01",
      description: "Product description 01",
      ProductImg: ProductImg1,
      id: 1,
    },
    {
      title: "Product 02",
      description: "Product description 02",
      ProductImg: ProductImg1,
      id: 2,
    },
    {
      title: "Product 03",
      description: "Product description 03",
      ProductImg: ProductImg1,
      id: 3,
    },
    {
      title: "Product 03",
      description: "Product description 03",
      ProductImg: ProductImg1,
      id: 3,
    },
  ];

  return (
    <section>
      <MainNavbar />

      <Container>
        <Row className="justify-content-md-center">
          {products.map(({ title, description, ProductImg, id }, i) => (
            <Col xs lg="4">
              <ProductCard
                id={id}
                title={title}
                description={description}
                ProductImg={ProductImg}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <div className="bg-success">
        <img width="150" src={Logo} alt="Logo" />
        <h1 className="text-center">
          Hello {userName} {userAge}
        </h1>
        <p className={Style.textGreen}>Paragraph</p>
      </div>
      <Footer />
    </section>
  );
}
