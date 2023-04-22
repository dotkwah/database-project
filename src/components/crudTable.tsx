import { 
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';
// import { useFormik } from "formik";
import CrudCreate from './crudFunctions/crudCreate';

export default function CrudTable() {
	return (
		<Box sx={{ p: 2, width: 1, backgroundColor: "#5c5c5c", borderRadius: 2, overflowY: "scroll", maxHeight: "90vh"}}>
            <Typography sx={{ my: 2, fontWeight: "bold" }} align="center" variant="h4">
                CRUD Functions Preview
            </Typography>
            <div>
                <Container>
                    <Button size='large' variant="contained" sx={{marginRight: 2}}>Create</Button>
                    <Button size='large' variant="contained" sx={{marginRight: 2}}>Read</Button>
                    <Button size='large' variant="contained" sx={{marginRight: 2}}>Update</Button>
                    <Button size='large' variant="contained">Delete</Button>
                </Container>
                <CrudCreate/>
            </div>
		</Box>
	);
}
