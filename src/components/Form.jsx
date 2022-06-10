import React, { useState } from "react";

const weightLabel = "Weight (in kg)";
const heightLabel = "Height (in cm)";

export default function EnterWeight() {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");

  return (
    //Main div
    <div className="formContainer">
      {/* Input fields */}
      <div className="inputFields">
        {/* Weight input */}
        <div>
          <div className="weightInput">
            {weightLabel}
            <form>
              <input type="text" value={weight} />
            </form>
          </div>
        </div>
        {/* Height input */}
        <div>
          <div className="heightInput">
            {heightLabel}
            <form>
              <input type="text" value={height} />
            </form>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <input
        className="calculate-bmi-button"
        type="submit"
        value="Calculate BMI"
      />
    </div>
  );
}
