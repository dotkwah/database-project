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
} from "@mui/material";

export default function CrudRead() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Box
          sx={{
          backgroundColor: 'white',
          marginTop: 4,
          padding: 3,
          }}
      >
      <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Search</Typography>
      <TextField
        label="Search ID"
        value={searchQuery}
        onChange={()=>{}}
      />
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
      </Box>
    </Container>
  );
}