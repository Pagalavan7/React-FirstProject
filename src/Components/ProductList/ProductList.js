import Products from "./Products";

function ProductList(props) {
  return props.newProductList.length ? (
    <ul className="list-group shadow mt-3">
      {props.newProductList.map((product) => {
        return (
          <Products
            key={product.pID}
            pID={product.pID}
            pName={product.pName}
            isAvailable={product.isAvailable}
            desc={product.desc}
            image={product.image || null}
            price={product.price}
            stock={product.stock}
          ></Products>
        );
      })}
    </ul>
  ) : (
    <h2>No products found. Please add products!</h2>
  );
}

export default ProductList;
