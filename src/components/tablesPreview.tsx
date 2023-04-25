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
    Button,
} from '@mui/material';
import { fetchDrinks } from "../../pages/services/drinks";
import { useEffect, useState } from 'react';
import { fetchFoods } from "../../pages/services/foods";
import { fetchSides } from "../../pages/services/sides";
import { fetchOrders } from "../../pages/services/orders";

type Drink = {
    id: number;
    name: string;
    desc: string;
    price: number;
    size: string;
}

type Food = {
    id: number;
    name: string;
    desc: string;
    price: number;
    isGluten: boolean;
}

type Side = {
    id: string;
    name: string;
    desc: string;
    isVegan: boolean;
    price: number;
}

type Order = {
    id: string;
    customer: string;
    drinkId: number;
    foodId: number;
    orderAt: string;
    sidesId: number;
}

export default function TablesPreview() {
    const [drinks, setDrinks] = useState<Drink[]>([]); 
    const [foods, setFoods] = useState<Food[]>([]); 
    const [sides, setSides] = useState<Side[]>([]); 
    const [orders, setOrders] = useState<Order[]>([]); 

    async function fetchData() {
        const drinksData = await fetchDrinks();
        const foodData = await fetchFoods();
        const sidesData = await fetchSides();
        const ordersData = await fetchOrders();
        setDrinks(drinksData);
        setFoods(foodData);
        setSides(sidesData);
        setOrders(ordersData);
    }

    useEffect(() => {
        fetchData();
      }, []);

	return (
		<Box sx={{ p: 2, mx: 2, width: 1, backgroundColor: "#919191", borderRadius: 2, overflowY: "scroll", maxHeight: "95vh" }}>
            <Typography sx={{ my: 2, fontWeight: "bold" }} align="center" variant="h4">
                Live Tables Preview
            </Typography>
            <Button 
                size='large' 
                variant="contained" 
                onClick={() => fetchData()} 
            >
                REFRESH
            </Button>
            <Box sx={{ my: 2}}>
                <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Food</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 50 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell style={{ width: "10%" }} sx={{fontWeight: "bold"}}>id</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>name</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>desc</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>isGluten</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>price</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {foods.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ width: "10%" }}>{row.id ?? ""}</TableCell>
                                <TableCell style={{ width: "20%" }} align="right" component="th" scope="row">
                                    {row.name ?? ""}
                                </TableCell>
                                <TableCell style={{ width: "20%" }} align="right">{row.desc ?? ""}</TableCell>
                                <TableCell style={{ width: "20%" }} align="right">{row.isGluten.toString()}</TableCell>
                                <TableCell style={{ width: "20%" }} align="right">{row.price ? `$ ${row.price}` : ""}</TableCell>
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
                            <TableCell style={{ width: "10%" }} sx={{fontWeight: "bold"}}>id</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>name</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>desc</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>size</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>price</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {drinks.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ width: "10%" }}>{row.id ?? ""}</TableCell>
                                <TableCell style={{ width: "20%" }} align="right" component="th" scope="row">
                                    {row.name ?? ""}
                                </TableCell>
                                <TableCell style={{ width: "20%" }} align="right">{row.desc ?? ""}</TableCell>
                                <TableCell style={{ width: "20%" }} align="right">{row.size ?? ""}</TableCell>
                                <TableCell style={{ width: "20%" }} align="right">{row.price ? `$ ${row.price}` : ""}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ my: 2}}>
                <Typography variant="h6" sx={{ my: 2}} fontWeight={"bold"}>Side</Typography>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 50 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell style={{ width: "10%" }} sx={{ fontWeight: "bold" }}>id</TableCell>
                        <TableCell style={{ width: "20%" }} align="right" sx={{ fontWeight: "bold" }}>name</TableCell>
                        <TableCell style={{ width: "20%" }} align="right" sx={{ fontWeight: "bold" }}>desc</TableCell>
                        <TableCell style={{ width: "20%" }} align="right" sx={{ fontWeight: "bold" }}>isVegan</TableCell>
                        <TableCell style={{ width: "20%" }} align="right" sx={{ fontWeight: "bold" }}>price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sides.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell style={{ width: "10%" }} component="th" scope="row">{row.id ?? ""}</TableCell>
                            <TableCell style={{ width: "20%" }} align="right">{row.name ?? ""}</TableCell>
                            <TableCell style={{ width: "20%" }} align="right">{row.desc ?? ""}</TableCell>
                            <TableCell style={{ width: "20%" }} align="right">{row.isVegan.toString()}</TableCell>
                            <TableCell style={{ width: "20%" }} align="right">{row.price ? `$ ${row.price}` : ""}</TableCell>
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
                        <TableCell style={{ width: "10%" }} sx={{fontWeight: "bold"}}>id</TableCell>
                        <TableCell style={{ width: "20%" }} align="right" sx={{fontWeight: "bold"}}>customer</TableCell>
                        <TableCell align="right" sx={{fontWeight: "bold"}}>foodId</TableCell>
                        <TableCell align="right" sx={{fontWeight: "bold"}}>drinkId</TableCell>
                        <TableCell align="right" sx={{fontWeight: "bold"}}>sidesId</TableCell>
                        <TableCell align="right" sx={{fontWeight: "bold"}}>orderAt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                        <TableRow
                            key={row.customer}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell style={{ width: "10%" }}>{row.id ?? ""}</TableCell>
                            <TableCell style={{ width: "20%" }} align="right" >{row.customer ?? ""}</TableCell>
                            <TableCell style={{ width: "20%" }} align="right">{row.foodId ?? ""}</TableCell>
                            <TableCell style={{ width: "20%" }} align="right">{row.drinkId ?? ""}</TableCell>
                            <TableCell style={{ width: "20%" }} align="right">{row.sidesId ?? ""}</TableCell>
                            <TableCell style={{ width: "10%" }} align="right">{row.orderAt ?? ""}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
		</Box>
	);
}
