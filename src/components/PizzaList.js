import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onEditPizza }) {
  // function onEditPizza(id) {
  //   console.log(id);
  // }

  const pizzaItems = pizzas.map(pizza => {
    return (
      <Pizza 
        key={pizza.id} 
        topping={pizza.topping} 
        size={pizza.size} 
        vegetarian={pizza.vegetarian}
        id={pizza.id}
        onEdit={onEditPizza}
      />
    );
  });


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Pizza here
          pizzaItems
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
