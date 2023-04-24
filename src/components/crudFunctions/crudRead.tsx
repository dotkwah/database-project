import { useState } from "react";
import {
  TextField,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Container,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import ToggleButtons from "../toggleButtons";

export default function CrudRead() {
  const [searchQuery, setSearchQuery] = useState("");
  const [alignment, setAlignment] = useState("food");

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
        Search
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
            label="Search ID"
            value={searchQuery}
            onChange={()=>{}}
          />
        </Grid>
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Pizza</TableCell>
                  <TableCell>Le Pizza de Hoe</TableCell>
                  <TableCell>$69.420</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}