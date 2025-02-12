import React, { useState } from "react";

export default function RecordBody() {
  const [userid, setuserid] = useState(sessionStorage.getItem("userid"));
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [fatpercentage, setfatpercentage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userInfo = {
      userid,
      height,
      weight,
      fatpercentage,
    };

    try {
      const response = await fetch("http://localhost:8080/recoduserbody", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>recodbody</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Height:</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setheight(e.target.value)}
          />
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setweight(e.target.value)}
          />
        </div>
        <div>
          <label>Fat Percentage:</label>
          <input
            type="number"
            value={fatpercentage}
            onChange={(e) => setfatpercentage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
