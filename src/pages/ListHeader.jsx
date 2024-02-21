// ListHeader.jsx

import React from "react";

const ListHeader = ({ listHeader }) => {
  return (
    <div className="list-header">
      <h1>{listHeader.name}</h1>
      <p>Category: {listHeader.category}</p>
      <p>Total Items: {listHeader.count}</p>
    </div>
  );
};

export default ListHeader;
