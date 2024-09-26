import React,{ useState } from "react";
import Header from "../components/Header";
import {Box, Typography, Button} from '@mui/material';
import AddInvoice from "../components/AddInvoice";

const Home = () => {
    const[addInvoice, setaddInvoice]  = useState(false);
    const toggleInvoice= () =>{
        setaddInvoice(true);

    }
    return (
        <>
            < Header />
            <Box style={{margin:30}} >
                <Typography variant="h5">Pending Invoices</Typography>
                {!addInvoice&& <Button 
                    variant="contained" 
                    style={{marginTop:15}}
                    onClick={()=> toggleInvoice()}
                    >Add Invoice</Button>
                }
                {addInvoice && <AddInvoice />}

            </Box>
        </>
    )
}


export default Home;