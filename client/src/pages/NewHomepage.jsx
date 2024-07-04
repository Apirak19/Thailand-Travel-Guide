import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from "../components/CarouselComponent";
import Tagscomponent from "../components/Tagscomponent";
import SuggestedComponents from "../components/SuggestedComponents";
import { Alert } from "react-bootstrap";
import "../App.css";

const NewHomepage = () => {
  return (
    <>
      <Alert dismissible variant="warning" className="m-0">
        <p>Change this and that and try again.</p>
      </Alert>
      <NavbarComponent />
      {/* <CarouselComponent /> */}
      <Tagscomponent />
      <SuggestedComponents />
    </>
  );
};

export default NewHomepage;
