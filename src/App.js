import React, { useState } from "react";
import "./styles.css";

var foodDb = {
  NorthIndian: [
    { name: "Zira Rice/Dal Makhani", rating: "4.5/5" },
    { name: "Butter Chicken", rating: "4/5" },
    { name: "Mom's hand-made food ", rating: "*****" }
  ],
  SouthIndian: [
    { name: "Idli/Dosa/Sambhar", rating: "4/5" },
    { name: "Biryani", rating: "4.5/5" },
    { name: "Vada/Sambhar ", rating: "3.7/5" }
  ],
  Chinese: [
    { name: "Dimsums", rating: "4.5/5" },
    { name: "Noodles", rating: "3.5/5" },
    { name: "Scz. Fried Rice", rating: "4/5" }
  ]
};
export default function App() {
  const foodCategory = Object.keys(foodDb);
  const [selectedFood, setFood] = useState("NorthIndian");

  function typeClickHandler(type) {
    setFood(type);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>
          Good Food Suggestions <span>🍲</span>{" "}
        </h1>
        <p>
          <small>
            Checkout my favorite foods. Select any category to know more.
          </small>
        </p>

        {foodCategory.map((category) => (
          <button className="button" onClick={() => typeClickHandler(category)}>
            {category}
          </button>
        ))}
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {foodDb[selectedFood].map((food) => (
              <li>
                <div className="list-div">
                  {food.name}
                  <div style={{ fontSize: "smaller" }}>{food.rating}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
