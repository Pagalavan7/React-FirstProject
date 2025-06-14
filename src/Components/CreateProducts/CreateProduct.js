import { useState } from "react";
import { ProductForm } from "./ProductForm";
export function CreateProduct(props) {
  let [showForm, updateShowForm] = useState(false);

  function updateProduct(product) {
    props.updateProduct(product);
  }

  function onCreateNewProduct() {
    updateShowForm(true);
  }

  function onCancelOrSubmitForm() {
    updateShowForm(false);
  }

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      {showForm || (
        <button onClick={onCreateNewProduct} className="btn btn-success">
          Create Product
        </button>
      )}
      {showForm && (
        <ProductForm
          updateProduct={updateProduct}
          cancelForm={onCancelOrSubmitForm}
        ></ProductForm>
      )}
    </div>
  );
}
