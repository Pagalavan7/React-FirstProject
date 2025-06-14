import { useState } from "react";

export function ProductForm(props) {
  let [name, updateName] = useState("");
  let [price, updatePrice] = useState("");
  let [description, updateDescription] = useState("");
  let [availability, updateAvailability] = useState("");
  let [imageURL, updateImageURL] = useState("");

  function nameHandler(event) {
    updateName(event.target.value);
  }
  function priceHandler(event) {
    updatePrice(event.target.value);
  }
  function descriptionHandler(event) {
    updateDescription(event.target.value);
  }
  function availablityHandler(event) {
    updateAvailability(event.target.checked);
  }
  function imageURLHandler(event) {
    updateImageURL(event.target.value);
  }
  function formSubmitHandler(event) {
    event.preventDefault();
    let product = {
      pName: name,
      price: Number(price),
      desc: description,
      isAvailable: availability,
      image: imageURL,
    };
    updateName("");
    updatePrice("");
    updateDescription("");
    updateAvailability("");
    updateImageURL("");

    props.updateProduct(product);
    onClickCancel();
  }

  function onClickCancel() {
    props.cancelForm();
  }

  return (
    <form className="row g-3" onSubmit={formSubmitHandler}>
      <div className="col-md-6">
        <label for="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          value={name}
          onChange={nameHandler}
        />
      </div>
      <div className="col-md-6">
        <label for="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          value={price}
          onChange={priceHandler}
        />
      </div>

      <div className="form-group">
        <label for="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={description}
          onChange={descriptionHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          value={availability}
          onChange={availablityHandler}
        />
        <label className="form-check-label" for="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label for="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={imageURL}
          onChange={imageURLHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
      <button className="btn btn-danger" onClick={onClickCancel}>
        Cancel
      </button>
    </form>
  );
}
