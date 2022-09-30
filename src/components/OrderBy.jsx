import React from "react";
import "./OrderBy.css";

const OrderBy = ({ setSelectedOrderBy }) => {
  return (
    <form className="order-by">
      <label htmlFor="order-by">Order </label>
      <select
        onChange={(e) => setSelectedOrderBy(e.target.value)}
        name="order-by"
        id="order-by"
        defaultValue="DESC"
      >
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </form>
  );
};

export default OrderBy;
