import React from "react";

export default ({ toggleData }) => {
  return (
    <>
      <h1 data-testid="toggleResult">
        You Have Activated{" "}
        {Object.keys(toggleData).map((itemKey) =>
          toggleData[itemKey] ? `${itemKey}, ` : ""
        )}
      </h1>
    </>
  );
};
