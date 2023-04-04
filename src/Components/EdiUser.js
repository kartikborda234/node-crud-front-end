import {styled, Toolbar} from "@mui/material";
import React, {useEffect, useState} from "react";
import {FormControl,FormGroup,InputLabel,Input,Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {editUser, getUser} from "../service/api";
import {useNavigate, useParams} from "react-router";

const Container=styled(FormGroup)`
     width:50%;
     margin: 5% auto 0 auto;
     & > div{
        margin-top:20px;
     }
`

const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}
const EditUser = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [user,setUser]=useState(defaultValue)

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log("user",user)
    }

    const handleSubmit= async ()=>{
        await editUser(user,id)
        navigate('/all');
    }

    useEffect(()=>{
        singleUser()
    },[])
    const singleUser=async ()=>{
        const res =await getUser(id)
        setUser(res.data[0])
    }

    return (
        <>
            <Container>
                <Typography variant="h1" >
                    EditUser
                </Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>handleChange(e)} name="name" value={user.name}/>
                </FormControl>
                <FormControl>
                    <InputLabel>username</InputLabel>
                    <Input onChange={(e)=>handleChange(e)} name="username" value={user.username}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>handleChange(e)} name="email" value={user.email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>handleChange(e)} name="phone" value={user.phone}/>
                </FormControl>
                <FormControl>
                    <Button onClick={()=>handleSubmit()} variant="contained">Update</Button>
                </FormControl>
            </Container>
        </>

    )
}
export default EditUser;