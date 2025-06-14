import "./FilterProduct.css";

let FilterProduct = (props) => {
  let handleFilterValue = (event) => {
    // console.log("updated filter value in filter comp", event.target.value);
    props.filterValue(event.target.value);
  };

  return (
    <div className="filter-area">
      <select name="isAvailable" onChange={handleFilterValue}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>
  );
};

export default FilterProduct;
