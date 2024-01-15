import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaToEdit, setPizzaToEdit] = useState({});

  // get pizza from database
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(r => r.json())
      .then(pizzas => setPizzas(pizzas));
  }, [])

  function handleEdit(id) {
    const pizzaToChange = pizzas.filter((pizza) => {
      return pizza.id === id;
    })
    setPizzaToEdit(pizzaToChange);
    console.log(pizzaToEdit);
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaTopping={pizzaToEdit.topping} pizzaSize={pizzaToEdit.size} pizzaVegetarian={pizzaToEdit.vegetarian}/>
      <PizzaList onEditPizza={handleEdit} pizzas={pizzas}/>
    </>
  );
}

export default App;
