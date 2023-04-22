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
      <TextField
        label="Search"
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