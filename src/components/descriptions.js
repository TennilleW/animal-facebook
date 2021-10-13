import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Cats:</h5>
          <p className="sub-text">
            Cats are one of the most common and popular house pets. Contrary to
            popular belief, cats aren't loners. On Zoobook, we know cats need
            friendship, affection, and comradery. It is our core belief that
            beneath every cat's hard, angry, exterior there is a pet who jus
            wants to play and cuddle with a friend.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Dogs:</h5>
          <p className="sub-text">
            Dogs are man's best friend and are very loyal. But dogs can also be
            dog's best friend. Maybe even better than man's best friend. On
            Zoobook, you can find millions of other dogs that can be a loyal
            companions, trusted confidants, and reliable wrestling partners.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Friends:</h5>
          <p className="sub-text">
            Who says cats and dogs can't get along? Here at Zoobook, we believe
            all pets can be best friends. Our Zoobook users believe it doesn't
            matter if you are a cat, dog, rabbit, or ferret; underneath that fur
            we are all cute, wonderful pets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
