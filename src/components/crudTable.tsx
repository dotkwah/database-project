import { 
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';
// import { useFormik } from "formik";
import CrudCreate from './crudFunctions/crudCreate';
import CrudRead from './crudFunctions/crudRead';
import CrudUpdate from './crudFunctions/crudUpdate';
import CrudDelete from './crudFunctions/crudDelete';
import { useState } from 'react';

export default function CrudTable() {
    const [selection, setSelection] = useState("create");

	return (
		<Box sx={{ p: 2, width: 1, backgroundColor: "#5c5c5c", borderRadius: 2, overflowY: "scroll", maxHeight: "95vh"}}>
            <Typography sx={{ my: 2, fontWeight: "bold" }} align="center" variant="h4">
                CRUD Functions Preview
            </Typography>
            <div>
                <Container>
                    <Button 
                        size='large' 
                        variant="contained" 
                        onClick={() => setSelection('create')} 
                        sx={{marginRight: 2}}
                    >
                        Create
                    </Button>
                    <Button 
                        size='large' 
                        variant="contained" 
                        onClick={() => setSelection('read')} 
                        sx={{marginRight: 2}}
                    >
                        Read
                    </Button>
                    <Button 
                        size='large' 
                        variant="contained" 
                        onClick={() => setSelection('update')} 
                        sx={{marginRight: 2}}
                    >
                        Update
                    </Button>
                    <Button 
                        size='large' 
                        variant="contained" 
                        onClick={() => setSelection('delete')}
                    >
                        Delete
                    </Button>
                </Container>
                {selection === 'create' && <CrudCreate />}
                {selection === 'read' && <CrudRead />}
                {selection === 'update' && <CrudUpdate />}
                {selection === 'delete' && <CrudDelete />}
            </div>
		</Box>
	);
}
