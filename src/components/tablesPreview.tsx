import Head from "next/head";
import { 
    Box,
    Table,
    TableContainer,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    Paper,
    Typography,
} from '@mui/material';
  
  const rows = [
    { id: "1", name: "2"},
    { id: "1", name: "2"},
    { id: "1", name: "2"},
    { id: "1", name: "2"},
    { id: "1", name: "2"},
  ];

export default function TablesPreview() {
	return (
		<Box sx={{ p: 2, mx: 2, width: 1, backgroundColor: "#919191", borderRadius: 2, overflowY: "scroll", maxHeight: "95vh" }}>
            <Typography sx={{ my: 2, fontWeight: "bold" }} align="center" variant="h4">
                Live Tables Preview
            </Typography>
            <Box sx={{ my: 2}}>
                <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Food</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 50 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: "bold"}}>name</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>id</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>desc</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>price</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>orderItem</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {"name"}
                                </TableCell>
                                <TableCell align="right">{"id"}</TableCell>
                                <TableCell align="right">{"desc"}</TableCell>
                                <TableCell align="right">{"price"}</TableCell>
                                <TableCell align="right">{"orderItem"}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ my: 2}}>
                <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Drink</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 50 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: "bold"}}>name</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>id</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>desc</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>price</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>orderItem</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {"name"}
                                </TableCell>
                                <TableCell align="right">{"id"}</TableCell>
                                <TableCell align="right">{"desc"}</TableCell>
                                <TableCell align="right">{"price"}</TableCell>
                                <TableCell align="right">{"orderItem"}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ my: 2}}>
                <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>OrderItem</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 50 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: "bold"}}>id</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>quantity</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>food</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>foodID</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>drink</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>drinkId</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>order</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>orderId</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{"1"}</TableCell>
                                <TableCell align="right">{"2"}</TableCell>
                                <TableCell align="right">{"food"}</TableCell>
                                <TableCell align="right">{"3"}</TableCell>
                                <TableCell align="right">{"drink"}</TableCell>
                                <TableCell align="right">{"4"}</TableCell>
                                <TableCell align="right">{"order"}</TableCell>
                                <TableCell align="right">{"5"}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ my: 2}}>
                <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Order</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 50 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: "bold"}}>customer</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>id</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>orderItem</TableCell>
                            <TableCell align="right" sx={{fontWeight: "bold"}}>orderAt</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{"John Doe"}</TableCell>
                                <TableCell align="right">{"id"}</TableCell>
                                <TableCell align="right">{"orderItem"}</TableCell>
                                <TableCell align="right">{"orderAt"}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
		</Box>
	);
}
