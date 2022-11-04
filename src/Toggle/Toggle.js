import React, { useState } from "react";

export const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          fugiat voluptas nesciunt sit eaque quis inventore amet perspiciatis
          ipsum, ducimus enim recusandae laboriosam minus eligendi quibusdam,
          blanditiis sint accusamus saepe.
        </p>
      )}

      <div style={{ textAlign: "center" }}>
        <button
          style={{ margin: "1rem" }}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};
