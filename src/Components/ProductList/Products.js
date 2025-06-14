import { useState } from "react";
import Button from "./Button";

// let imagePath = require("../../images/clients.png");
let style = { color: "red", fontSize: 20 };

function Products(props) {
  let [productCount, updateCount] = useState(0);

  let badgeClass = "badge ";
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

  let incrementProductCount = function () {
    updateCount(++productCount);
    console.log(productCount);
  };
  let decrementProductCount = function () {
    if (productCount > 0) updateCount(--productCount);
    console.log(productCount);
  };
  let displayProductCount = function () {
    return productCount > 0 ? productCount : 0;
  };

  return (
    <li className="list-group-item">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props?.pName}</h5>
          <p className="font-italic text-muted mb-0 small">{props?.desc}</p>
          <div className="d-flex align-items-center justify-content-between mt-1">
            <h6 className="font-weight-bold my-2">{props?.price}</h6>
          </div>
        </div>
        <img
          // src={require("../images/clients.png")}
          src={props?.image}
          alt="Generic placeholder img"
          width="200"
          className="ml-lg-5 order-1 order-lg-2"
        ></img>
      </div>
      <Button
        eventHandler={incrementProductCount}
        disable={productCount >= props.stock}
      >
        +
      </Button>
      {/* <span style={{ color: "red", fontSize: 40 }}>
          {displayProductCount()}
        </span> */}
      <span style={style}>{displayProductCount()}</span>
      <Button eventHandler={decrementProductCount} disable={productCount === 0}>
        -
      </Button>
      <span
        className={badgeClass}
        style={{ padding: "1em", marginLeft: "1em" }}
      >
        {props.isAvailable ? "available" : "unavailable"}
      </span>
    </li>
  );
}
export default Products;
