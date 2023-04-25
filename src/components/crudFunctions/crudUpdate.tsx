import {
  TextField,
  Container,
  Box,
  Typography,
  OutlinedInput,
  InputAdornment,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Switch,
} from "@mui/material";
import { useEffect, useState } from "react";
import ToggleButtons from "../toggleButtons";
import { fetchFoods } from "../../../pages/services/foods";
import { fetchDrinks } from "../../../pages/services/drinks";
import { fetchSides } from "../../../pages/services/sides";

type Items = {
  id: number;
  name: string;
}

export default function CrudUpdate() {
  const [alignment, setAlignment] = useState('food');
  const [checked, setChecked] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [size, setSize] = useState<string>("");

  const [foods, setFoods] = useState<Items[]>([]);
  const [selectedFood, setSelectedFood] = useState<number>();

  const [drinks, setDrinks] = useState<Items[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<number>();

  const [sides, setSides] = useState<Items[]>([]);
  const [selectedSide, setSelectedSide] = useState<number>();

  const setSelectedItem = (value: Number) => {
    if (alignment == "drink") {
      setSelectedDrink(Number(value));
    } else if (alignment == "side") {
      setSelectedSide(Number(value));
    } else {
      setSelectedFood(Number(value));
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const itemDropdown = () => {
    if (alignment == "drink") {
      return drinks.map((drink) => (
        <MenuItem key={drink.id} value={drink.id}>
          {drink.name}
        </MenuItem>
      ))
    } else if (alignment == "side") {
      return sides.map((side) => (
        <MenuItem key={side.id} value={side.id}>
          {side.name}
        </MenuItem>
      ))
    } else {
      return foods.map((food) => (
        <MenuItem key={food.id} value={food.id}>
          {food.name}
        </MenuItem>
      ))
    }
  }

  async function updateItems() {
    if (alignment == "food") {
      updateFoods(selectedFood, name, desc, price, checked);
      setName("")
      setDesc("")
      setPrice(0)
      setChecked(false)
      fetchFoods();
    } else if (alignment == "drink"){
      updateDrinks(selectedDrink, name, desc, price, size);
      setName("")
      setDesc("")
      setPrice(0)
      setSize("")
      fetchDrinks();
    } else if (alignment == "side"){
      updateSides(selectedSide, desc, price, checked);
      setName("")
      setDesc("")
      setPrice(0)
      setChecked(false)
      fetchSides();
    }
  }

  useEffect(() => {
    async function fetchData() {
      const foodsData = await fetchFoods();
      const drinksData = await fetchDrinks();
      const sidesData = await fetchSides();
      setFoods(foodsData);
      setDrinks(drinksData);
      setSides(sidesData);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Box
          sx={{
          backgroundColor: 'white',
          marginTop: 4,
          padding: 3,
          }}
      >
      <Typography 
        variant="h6" 
        sx={{ my: 2}} 
        fontWeight={"bold"}
      >
        Update
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ToggleButtons
              alignment={alignment}
              setAlignment={setAlignment}
            />
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
            <InputLabel>ID</InputLabel>
                <Select
                  labelId="id-select-label"
                  id="food-select"
                  value={selectedFood || selectedDrink || selectedSide || ''}
                  onChange={(e) => setSelectedItem(Number(e.target.value))}
                  fullWidth
                >
                  {itemDropdown()}
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                name="description"
                label="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                fullWidth
              />
            </Grid>
            {alignment === 'drink' ? (
              <Grid item xs={12}>
              <TextField
                  id="size"
                  name="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  label="Size"
                  fullWidth
              />
              </Grid>
              ) : (
                <Grid item xs={12}>
                <Typography 
                  sx={{ px: 1}} 
                  fontWeight={600}
                >
                  {alignment === 'side' ? 'Vegan' : 'Gluten'}
                </Typography>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </Grid>
              )}
            <Grid item xs={12}>
            <OutlinedInput
                  id="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  fullWidth
                  defaultValue={0}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{my: 2}}
              onClick={updateItems}
            >
              {"Update"}
            </Button>
            </Grid>
          </Grid>
      </Box>
    </Container>
  );
}