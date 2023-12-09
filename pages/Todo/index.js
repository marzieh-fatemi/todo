import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Todo.module.css'
import {Box, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Table from "@/pages/table";

function  Index(){
    return (
        <>
            <Card  >
                <CardContent sx={{marginX:"10px"}} >
                    <Typography variant="h3" sx={{textAlign:"center"}}>Todo App</Typography>
                    <Box  sx={{display:"flex",marginTop:"40px"}}>
                        <Box width="50%" marginRight="15px">
                            <TextField fullWidth label="Add todo" variant="outlined"/>
                        </Box>
                        <Box width="50%" mx="15px">
                            <TextField fullWidth  label="mm/dd/yyyy" variant="outlined"/>
                        </Box>
                            <Button variant="contained">Add</Button>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"}} >
                        <Box>
                            <Button sx={{marginRight:"5px"}} variant="contained">All</Button>
                            <Button sx={{marginRight:"5px"}} variant="contained">Pending</Button>
                            <Button sx={{marginRight:"5px"}} variant="contained">Compiled</Button>
                        </Box>
                        <Box>
                            <Button variant="contained">Delete All</Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Table/>
        </>
    )

}
export default Index