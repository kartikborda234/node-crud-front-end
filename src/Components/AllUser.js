import React, {useEffect, useState} from "react";
import {Table,TableHead,TableRow,TableBody,TableCell} from "@mui/material";
import {getUsers,deleteUser} from "../service/api";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom"

const AllUser=()=>{
     const [users,setUsers]=useState([]);
    useEffect(()=>{
        getAllUsers()
    },[])

    const getAllUsers=async ()=>{
      const response = await getUsers()
        setUsers(response.data)
    }

    const handleDelete=async (id)=>{
       await deleteUser(id)
        getAllUsers()
    }
    return(
        <>
            <Table sx={{ minWidth: 700 ,marginTop:"20px"}} >
                <TableHead style={{backgroundColor:"#b0bec5"}}>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item,i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.username}</TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right">{item.phone}</TableCell>
                            <TableCell align="right">
                                <Link to={`/edit/${item["_id"]}`}><BorderColorIcon style={{cursor:"pointer",color:"#c2185b"}}  /></Link>
                                <DeleteIcon style={{cursor:"pointer",color:"#7b1fa2"}} onClick={()=>handleDelete(item["_id"])}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>

    )
}
export default AllUser;