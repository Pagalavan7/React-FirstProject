import { useState } from "react";
import "./App.css";
import { CreateProduct } from "./Components/CreateProducts/CreateProduct";
import ProductList from "./Components/ProductList/ProductList";
import FilterProduct from "./Components/FilterProduct/FilterProduct";

let products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/fresh-milk.png",
    price: 12,
    stock: 5,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cottage-cheese.png",
    price: 10,
    stock: 10,
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15,
    stock: 20,
  },
  {
    pID: 4,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
    stock: 20,
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
    stock: 20,
  },
];

export function App() {
  // return <h2>This is App Component {message} </h2>;
  //cannot return 2 html elements directly.. //to do that we have to wrap that with a container element

  // return (
  //   <div>
  //     <h1 className="header">
  //       I am learning React {message} {2 + 3}
  //     </h1>
  //     <p className="para">Learning CSS XML syntax and others</p>
  //   </div>
  // );

  // let p = document.createElement("p");
  // p.innerHTML = "Hey im creating app using js";
  // return p;

  let [productList, updateProductList] = useState(products);

  function updateProduct(product) {
    product.pID = productList.length + 1;
    updateProductList([product, ...productList]);
  }

  let [filterValue, updateFilterValue] = useState("all");

  function filter(filterVal) {
    updateFilterValue(filterVal);
  }

  let filteredList = productList.filter((product) => {
    if (filterValue === "available") {
      console.log("inside3 avaliabel filter block");
      return product.isAvailable === true;
    } else if (filterValue === "unavailable") {
      return product.isAvailable === false;
    } else return product;
  });

  console.log("filter vlaue updated", filteredList);

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <div>
          <CreateProduct updateProduct={updateProduct}></CreateProduct>
          <FilterProduct filterValue={filter}></FilterProduct>
          <ProductList
            newProductList={filteredList}
            filterVal={filterValue}
          ></ProductList>
        </div>
      </div>
    </div>
  );
}
