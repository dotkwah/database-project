import { 
    Box,
    Typography,
} from '@mui/material';

export default function CrudTable() {
	return (
		<Box sx={{ p: 2, width: 1, backgroundColor: "#5c5c5c", borderRadius: 2 }}>
            <Typography sx={{ my: 2}} align="center">
                CRUD Functions Preview
            </Typography>
		</Box>
	);
}
