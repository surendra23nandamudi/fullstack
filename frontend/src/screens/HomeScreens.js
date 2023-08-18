import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import axios from "axios";
import Product from "../components/Product";
const HomeScreens = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, i) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreens;
