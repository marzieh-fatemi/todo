
import TextField from '@mui/material/TextField';
import {Box, Grid} from "@mui/material";
import Button from "@mui/material/Button";
function  SignUp(){
    return (
        <>
            <Box
            >
                <Grid container spacing={3}
                      sx={{ minHeight: '100vh' }}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                >
                    <Grid item xs={12}>
                        <h1>SignUp</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="password" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Confrim Password" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant="contained" sx={{marginLeft:'8px'}}>signUp</Button>
                    </Grid>
                </Grid>

            </Box>

        </>
    )

}
export default SignUp