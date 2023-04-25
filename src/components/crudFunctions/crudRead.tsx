import { useEffect, useState } from "react";
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
import { fetchFoods } from "../../../pages/services/foods";
import { fetchDrinks } from "../../../pages/services/drinks";
import { fetchSides } from "../../../pages/services/sides";

type Items = {
  id: number;
  name: string;
  desc: string;
  price: number;
}

export default function CrudRead() {
  const [searchQuery, setSearchQuery] = useState("0");
  const [alignment, setAlignment] = useState("food");
  const [foods, setFoods] = useState<Items[]>([]);
  const [drinks, setDrinks] = useState<Items[]>([]);
  const [sides, setSides] = useState<Items[]>([]);

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
            onChange={(e) => setSearchQuery(e.target.value)}
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
            {alignment === "food" &&
              foods
                .filter((item) =>
                  item.id.toString().includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.desc}</TableCell>
                    <TableCell>{item.price}</TableCell>
                  </TableRow>
                ))}
            {alignment === "drink" &&
              drinks
                .filter((item) =>
                  item.id.toString().includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.desc}</TableCell>
                    <TableCell>{item.price}</TableCell>
                  </TableRow>
                ))}
            {alignment === "side" &&
              sides
                .filter((item) =>
                  item.id.toString().includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.desc}</TableCell>
                    <TableCell>{item.price}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}