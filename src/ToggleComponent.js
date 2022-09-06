import * as React from "react";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

const toggleItemsData = [
  {
    label: "Good",
    defaultValue: true,
    key: "good",
    color: "secondary",
  },
  {
    label: "Fast",
    defaultValue: false,
    key: "fast",
    color: "warning",
  },
  {
    label: "Cheap",
    defaultValue: false,
    key: "cheap",
  },
];

export const ToggleSwitcher = ({ toggleState, onToggle }) => {
  return (
    <FormGroup>
      {toggleItemsData.map((item) => {
        return (
          <FormControlLabel
            key={item.key}
            control={
              <Switch
                data-testid={item.key}
                color={item.color}
                checked={toggleState[item.key]}
                onChange={(e) => onToggle(item, e)}
                name={item.key}
                defaultChecked={item.defaultValue}
              />
            }
            label={item.label}
          />
        );
      })}
    </FormGroup>
  );
};
export default ToggleSwitcher;
