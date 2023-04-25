
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
const color1 = red[800];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Display() {
    const [contacts, setContacts] = useState([]);
    useEffect(()=>{
        loadItems();
    },[]);

    const loadItems = async()=>{
         const result = await axios.get("http://localhost:3001/getmessages");
         setContacts(result.data);
    };

    const deleteProduct=async (id)=>{
        let isDelete=window.confirm("Do you Really Want to delete!");
        if(isDelete){
            await axios.delete(`http://localhost:3001/getmessages/${id}`);
            loadItems();
        }
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Full Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Message</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((product) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell align="right">{product.name}</StyledTableCell>
              <StyledTableCell align="right">{product.email}</StyledTableCell>
              <StyledTableCell align="right">{product.phonenumber}</StyledTableCell>
              <StyledTableCell align="right">{product.message}</StyledTableCell>
              {/* <StyledTableCell align="right"><img src={product.image} width="70" height="70" /></StyledTableCell> */}
              <StyledTableCell align="right">
              {/* <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" color='error'/>
      </IconButton> */}
      {/* <Button variant="contained" size="large" startIcon={<EditIcon />} component={Link} to={`/editProduct/${product.id}`}>Edit</Button> */}
      <Button variant="contained" color="error" size="large" startIcon={<DeleteIcon />} onClick={()=> deleteProduct(product._id)} > Delete</Button>
      {/* <IconButton aria-label="edit" color="success" size="large">

        <EditIcon fontSize="inherit" color='success' size="30px" component={Link} to={`/editProduct/${product.id}`}/>
      </IconButton> */}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

