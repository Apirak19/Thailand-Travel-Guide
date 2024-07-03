import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from "../components/CarouselComponent";
import { Alert } from "react-bootstrap";

const NewHomepage = () => {
  return (
    <>
      <Alert dismissible variant="warning" className="alert">
        <p>Change this and that and try again.</p>
      </Alert>
      <NavbarComponent />
      <CarouselComponent />
    </>
  );
};

export default NewHomepage;
