import {styled, Toolbar} from "@mui/material";
import React, {useState} from "react";
import {FormControl,FormGroup,InputLabel,Input,Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {addUser} from "../service/api";
import {useNavigate} from "react-router";

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
const AddUser = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState(defaultValue)

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log("user",user)
    }

    const handleSubmit= async ()=>{
       await addUser(user)
        navigate('/all');
    }
    return (
        <>
        <Container>
            <Typography variant="h1" >
                AddUser
            </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>username</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>handleChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button onClick={()=>handleSubmit()} variant="contained">Add user</Button>
            </FormControl>
        </Container>
        </>

    )
}
export default AddUser;