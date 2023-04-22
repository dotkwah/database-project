import {
  TextField,
  Container,
  Box,
  Typography,
  OutlinedInput,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";

export default function CrudUpdate() {
  return (
    <Container>
      <Box
          sx={{
          backgroundColor: 'white',
          marginTop: 4,
          padding: 3,
          }}
      >
      <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Update</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="id"
                name="id"
                label="ID"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="food"
                name="food"
                label="Food Name"
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
              {"Update"}
            </Button>
            </Grid>
          </Grid>
      </Box>
    </Container>
  );
}