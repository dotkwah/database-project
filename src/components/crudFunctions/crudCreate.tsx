import { Box, Button, Container, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Switch, TextField, Typography } from "@mui/material";
import ToggleButtons from "../toggleButtons";
import { useEffect, useState } from "react";
import { createFoods, fetchFoods } from "../../../pages/services/foods";
import { createDrinks, fetchDrinks } from "../../../pages/services/drinks";
import { createSides, fetchSides } from "../../../pages/services/sides";
import { createOrders, fetchOrders } from "../../../pages/services/orders";

type Items = {
  id: number;
  name: string;
}

export default function CrudCreate() {
  const [alignment, setAlignment] = useState('food');
  const [checked, setChecked] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [size, setSize] = useState<string>("");
  const [customer, setCustomer] = useState<string>("");

  const [foods, setFoods] = useState<Items[]>([]);
  const [selectedFood, setSelectedFood] = useState<number>();

  const [drinks, setDrinks] = useState<Items[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<number>();

  const [sides, setSides] = useState<Items[]>([]);
  const [selectedSide, setSelectedSide] = useState<number>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  async function createItems() {
    if (alignment == "food") {
      createFoods(name, desc, price, checked);
      setName("")
      setDesc("")
      setPrice(0)
      setChecked(false)
      setFoods(await fetchFoods());
    } else if (alignment == "drink"){
      createDrinks(name, desc, price, size);
      setName("")
      setDesc("")
      setPrice(0)
      setSize("")
      setDrinks(await fetchDrinks());
    } else if (alignment == "side"){
      createSides(name, desc, price, checked);
      setName("")
      setDesc("")
      setPrice(0)
      setChecked(false)
      setSides(await fetchSides());
    }
    
  }

  async function createOrder() {
    if (selectedFood && selectedDrink && selectedSide !== undefined) {
      createOrders(customer, selectedFood, selectedDrink, selectedSide);
      setCustomer("")
      setSelectedFood(undefined);
      setSelectedDrink(undefined);
      setSelectedSide(undefined);
      fetchOrders();
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
          Create
        </Typography>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <ToggleButtons
                alignment={alignment}
                setAlignment={setAlignment}
            />
            </Grid>
              <Grid item xs={12}>
              <TextField
                  id={"name"}
                  name={"name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label={alignment == "food" ? "Food Name" : alignment == "drink" ? "Drink Name" : "Side Name"}
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  id="description"
                  name="description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  label="Description"
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
                  onClick={createItems}
              >
                  {"Create"}
              </Button>
              </Grid>
          </Grid>
          <Divider />
        <Typography 
          variant="h6" 
          sx={{ my: 2}} 
          fontWeight={"bold"}
        >
          Order Information
        </Typography>
          <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
                  id="customer"
                  name="customer"
                  label="Customer Name"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel>Food Items</InputLabel>
                <Select
                  labelId="food-select-label"
                  id="food-select"
                  value={selectedFood || ''}
                  onChange={(e) => setSelectedFood(Number(e.target.value))}
                  fullWidth
                >
                  {foods.map((food) => (
                    <MenuItem key={food.id} value={food.id}>
                      {food.name}
                    </MenuItem>
                  ))}
                </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel>Drink Items</InputLabel>
                <Select
                  labelId="drink-select-label"
                  id="drink-select"
                  value={selectedDrink || ''}
                  onChange={(e) => setSelectedDrink(Number(e.target.value))}
                  fullWidth
                >
                  {drinks.map((drink) => (
                    <MenuItem key={drink.id} value={drink.id}>
                      {drink.name}
                    </MenuItem>
                  ))}
                </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel>Side Items</InputLabel>
                <Select
                  labelId="side-select-label"
                  id="side-select"
                  value={selectedSide || ''}
                  onChange={(e) => setSelectedSide(Number(e.target.value))}
                  fullWidth
                >
                  {sides.map((side) => (
                    <MenuItem key={side.id} value={side.id}>
                      {side.name}
                    </MenuItem>
                  ))}
                </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{my: 2}}
                  onClick={createOrder}
              >
                  {"Submit"}
              </Button>
              </Grid>
          </Grid>
      </Box>
    </Container>
  );
}