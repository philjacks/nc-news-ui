import React from "react";

const OrderBy = ({ setSelectedOrderBy }) => {
  return (
    <form style={{ margin: "1rem 1rem 0 1rem" }}>
      <label htmlFor="order-by">Order by </label>
      <select
        onChange={(e) => setSelectedOrderBy(e.target.value)}
        name="order-by"
        id="order-by"
        defaultValue="ASC"
      >
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </form>
  );
};

export default OrderBy;
