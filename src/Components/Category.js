import React from "react";
import Container from "react-bootstrap/esm/Container";
import CategoryCardTextLeft from "./CategoryCardTextLeft";
import CategoryCardTextRight from "./CategoryCardTextRight";
import womenImg from "../Assest/Images/women.jpg";
import manImg from "../Assest/Images/man.jpg";
import PregmentWomenImg from "../Assest/Images/pregnantWomen.jpg";
import childrenImg from "../Assest/Images/children.jpg";

function Category() {
  return (
    <div className="py-5 text-center">
      <Container>
        <CategoryCardTextLeft
          title="For Women's"
          numProduct="20"
          image={womenImg}
        />
        <CategoryCardTextRight
          title="For Men's"
          numProduct="28"
          image={manImg}
        />
        <CategoryCardTextLeft
          title="For Pregment Women's"
          numProduct="94"
          image={PregmentWomenImg}
        />
        <CategoryCardTextRight
          title="For Cildren's"
          numProduct="44"
          image={childrenImg}
        />
      </Container>
    </div>
  );
}

export default Category;
