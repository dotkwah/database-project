import { Box, Button, Container, Divider, Grid, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import ToggleButtons from "../toggleButtons";
import { useState } from "react";

export default function CrudCreate() {
  const [alignment, setAlignment] = useState('food');

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
                  id={alignment == 'food' ? "food" : "drink"}
                  name={alignment == 'food' ? "food" : "drink"}
                  label={alignment == 'food' ? "Food Name" : "Drink Name"}
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  id="description"
                  name="description"
                  label="Description"
                  fullWidth
              />
              </Grid>
              <Grid item xs={12}>
              <OutlinedInput
                  id="price"
                  name="price"
                  fullWidth
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
              </Grid>
              <Grid item xs={12}>
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{my: 2}}
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