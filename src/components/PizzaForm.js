import React, { useEffect, useState } from "react";

function PizzaForm({ pizza, onSubmit }) {
  const [topping, setTopping] = useState("");
  const [size, setSize] = useState("");
  const [vegetarian, setVegetarian] = useState(null);

  console.log(topping, size, vegetarian);

  // update state on re-render if pizza changes
  useEffect(() => {
    setTopping(pizza[0].topping);
    setSize(pizza[0].size);
    setVegetarian(pizza[0].vegetarian);
  }, pizza)

  // PATCH when the user submits the form
  function handleSubmit(e) {
    e.preventDefault();

    const changedPizza = {
      id: pizza[0].id,
      size: size,
      topping: topping,
      vegetarian: vegetarian
    };

    fetch(`http://localhost:3001/pizzas/${pizza[0].id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changedPizza)
    })
      .then(r => r.json())
      .then((updatedPizza) => onSubmit(updatedPizza));
  }

  function handleVegetarianChange(e) {
    if (e.target.value === "Not Vegetarian") {
      setVegetarian(false);
    }
    else {
      setVegetarian(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian === true? true : false}
              onChange={handleVegetarianChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegetarian === false? true : false}
              onChange={handleVegetarianChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
