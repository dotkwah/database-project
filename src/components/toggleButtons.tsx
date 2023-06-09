import {
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

type ToggleButtonsProps = {
  alignment: string;
  setAlignment: (value: string) => void;
  isDelete?: boolean;
};

export default function ToggleButtons({
  alignment,
  setAlignment,
  isDelete
}: ToggleButtonsProps) {

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      { isDelete ? <ToggleButton value="order">Order</ToggleButton> : <></> }
      <ToggleButton value="food">Food</ToggleButton>
      <ToggleButton value="drink">Drink</ToggleButton>
      <ToggleButton value="side">Side</ToggleButton>
    </ToggleButtonGroup>
  );
}