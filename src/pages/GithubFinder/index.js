import { Button, TextField, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import searching from '../../img/incognito.png'

export const userContext = React.createContext();

const HomeSearch = () => {

    const [ valor, setValor ] = useState("");


    return (
        <Container maxWidth="sm" sx={{display:"flex", alignItems: "center", height: "100vh"}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <p style={{textAlign: "center",}}><img style={{width: "200px"}} src={searching} alt=""/></p>
                    <h1 style={{textAlign: "center",}}>Github Search</h1>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    onChange={(e) => setValor(e.target.value)}
                    fullWidth
                    placeholder="Search..." />
                </Grid>
                <Grid item xs={12}>
                    <Link to={`/users/${valor}`} style={{textDecoration: "none"}}>
                        <Button variant="contained" fullWidth>Search</Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeSearch