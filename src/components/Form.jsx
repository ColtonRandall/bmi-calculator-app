import React, { useState } from "react";

function EnterWeight() {
  // useState
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const weightLabel = "Weight (in kg)";
  const heightLabel = "Height (in cm)";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("BMI details submitted");
  };

  return (
    //Main div
    <div className="formContainer">
      {/* Input fields */}
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          {weightLabel}
          <input
            className="weightInput "
            type="number"
            placeholder={weight}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          {heightLabel}
          <input
            className="heightInput "
            type="text"
            placeholder={height}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            className="calculate-bmi-button"
            type="submit"
            value="Calculate BMI"
          />
        </form>
      </div>
      <h3 className="output">The weight you entered: {weight}</h3>
      <h3 className="output">The height you entered: {height}</h3>
    </div>
  );
}
export default EnterWeight;
