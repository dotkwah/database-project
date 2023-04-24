import {
  TextField,
  Container,
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useState } from "react";
import ToggleButtons from "../toggleButtons";

export default function CrudDelete() {
  const [alignment, setAlignment] = useState('food');
  const [id, setId] = useState<number>();

  async function deleteItems() {
    if (alignment == "food") {
      const data = await fetch('/api/foods?id=' + id, {
        method: 'DELETE',
      });
      setId(0)
    } else if (alignment == "drink"){
      const data = await fetch('/api/drinks?id=' + id, {
        method: 'DELETE',
      });
      setId(0)
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
      <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Delete</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ToggleButtons
                alignment={alignment}
                setAlignment={setAlignment}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="id"
                name="id"
                label="ID"
                value={id}
                onChange={(e) => setId(Number(e.target.value))}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{my: 2}}
              onClick={deleteItems}
            >
              {"Delete"}
            </Button>
            </Grid>
          </Grid>
      </Box>
    </Container>
  );
}