import React from "react";
import island from "../assets/island.png";

const Tagscomponent = () => {
  const tags = [
    {
      id: 1,
      name: "island",
      img: island,
    },
    {
      id: 2,
      name: "island",
      img: island,
    },
    {
      id: 3,
      name: "island",
      img: island,
    },
    {
      id: 4,
      name: "island",
      img: island,
    },
    {
      id: 5,
      name: "island",
      img: island,
    },
  ];
  return (
    <div className="d-flex justify-content-center gap-20 my-10">
      {tags.map((item) => {
        return (
          <div className="d-flex flex-column gap-2" key={item.id}>
            <img src={item.img} alt="" width={50} height={50} />
            <h4>{item.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Tagscomponent;
