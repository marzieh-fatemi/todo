
import TextField from '@mui/material/TextField';
import {Box, Grid} from "@mui/material";
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
function  LoginPage(){
    const router = useRouter()
    const signUpHandler=()=>{
        router.push('/SignUp')

    }

    const signInHandler=()=>{
        router.push('/Todo')
    }
    return(
        <>
            <Box>
                <Grid container spacing={3}
                    sx={{ minHeight: '100vh' }}
                    direction="column"
                     alignItems="center"
                     justifyContent="center"
                     >
                    <Grid item xs={12}>
                        <h1>Todo App Login</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="password" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12} >
                        <Button onClick={signInHandler} variant="contained" sx={{marginLeft:'8px'}}>signIn</Button>
                        <Button onClick={signUpHandler} variant="contained" sx={{marginLeft:'8px'}}>signUp</Button>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export  default LoginPage