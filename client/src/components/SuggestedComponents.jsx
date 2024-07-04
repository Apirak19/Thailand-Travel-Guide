import React from "react";
import CardComponent from "./CardComponent";
import trips from "../assets/db.js";

const SuggestedComponents = () => {
  return (
    <div>
      <h2 className="text-center my-5" style={{fontSize: 30}}>Suggested Trips</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {trips.map((item) => {
          return (
            <CardComponent
              key={item.eid}
              title={item.title}
              eid={item.eid}
              images={item.images}
              tags={item.tags}
              description={item.description}
              likes={item.likes}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedComponents;
