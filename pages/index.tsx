import Head from "next/head";
import { 
  Stack,
  Box,
} from '@mui/material'
import TablesPreview from "@/components/tablesPreview";
import CrudTable from "@/components/crudTable";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
        <Box sx={{ p: 2, width: 1 }}>
          <Stack direction={"row"} sx={{ width: 1}}>
            <CrudTable />
            <TablesPreview />
          </Stack>
        </Box>
			</main>
		</div>
	);
}
