import React from "react";

function Pizza({ topping, size, vegetarian, id, onEdit }) {
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true? "Yes" : "No"}</td>
      <td>
        <button onClick={() => onEdit(id)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
