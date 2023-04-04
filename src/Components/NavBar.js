import React from "react";
import { styled,AppBar,Toolbar } from '@mui/material';
import {NavLink} from "react-router-dom";
import Typography from "@mui/material/Typography";

const Header=styled(AppBar)`
  background-color:#455a64
`
const Navbar=()=>{

    return(
        <>
            <Header position={'static'}>
                <Toolbar sx={{ gap: "20px" }}>
                    <Typography variant="h6" component={NavLink} to={'/'} sx={{ color: "white" ,textDecoration:"none"}}>
                        Home
                    </Typography>
                    <Typography variant="h6" component={NavLink} to={'/all'} sx={{ color: "white", textDecoration:"none"}}>
                        AllUsers
                    </Typography>
                    <Typography variant="h6" component={NavLink} to={'/add'} sx={{ color: "white" ,textDecoration:"none"}}>
                        AddUser
                    </Typography>

                    {/*<NavLink to={'/'}>Home</NavLink>*/}
                    {/*<NavLink to={'/all'}>AllUsers</NavLink>*/}
                    {/*<NavLink to={'/add'}>AddUser</NavLink>*/}
                </Toolbar>
            </Header>
        </>

    )
}
export default Navbar;