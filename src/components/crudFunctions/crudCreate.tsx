import { Box, Button, Container, Divider, Grid, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import ToggleButtons from "../toggleButtons";
import { useState } from "react";

export default function CrudCreate() {
  const [alignment, setAlignment] = useState('food');
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  async function createItems() {
    if (alignment == "food") {
      const data = await fetch('/api/createFoods', {
        method: 'POST',
        body: JSON.stringify({name, desc, price}),
      });
      setName("")
      setDesc("")
      setPrice(0)
    } else if (alignment == "drink"){
      const data = await fetch('/api/createDrinks', {
        method: 'POST',
        body: JSON.stringify({name, desc, price}),
      });
      setName("")
      setDesc("")
      setPrice(0)
    }
  }

  return (
    <Container>
      <Box
          sx={{
          backgroundColor: 'white',
          marginTop: 4,
          padding: 3,
          }}
      >
        <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Create</Typography>
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
                  label={alignment == "food" ? "Food Name" : "Drink Name"}
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
        <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Order Information</Typography>
          <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
                  id="customer"
                  name="customer"
                  label="Customer Name"
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  id="food"
                  name="food"
                  label="Food Item"
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  id="drink"
                  name="drink"
                  label="Drink Item"
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  type="number"
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{my: 2}}
              >
                  {"Submit"}
              </Button>
              </Grid>
          </Grid>
      </Box>
    </Container>
  );
}