import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaToEdit, setPizzaToEdit] = useState([{}]);

  // get pizza from database
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(r => r.json())
      .then(pizzas => setPizzas(pizzas));
  }, [])

  function handleEdit(id) {
    const pizzaToChange = pizzas.filter((pizza) => {
      // console.log('id' + id);
      // console.log(pizza.id);
      return pizza.id === id;
    })
    // console.log(pizzaToEdit);
    setPizzaToEdit(pizzaToChange);
  }

  function handleSubmit(updatedPizza) {
    console.log(updatedPizza);
    const updatedPizzas = pizzas.map((pizza) => {
      if (pizza.id === updatedPizza.id) {
        return updatedPizza;
      }
      else {
        return pizza;
      }
    });
    setPizzas(updatedPizzas);
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizzaToEdit} onSubmit={handleSubmit}/>
      <PizzaList onEditPizza={handleEdit} pizzas={pizzas}/>
    </>
  );
}

export default App;
