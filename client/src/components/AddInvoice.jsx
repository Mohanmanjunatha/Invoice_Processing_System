import { useState } from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';
import { saveInvoice } from '../services/api';

const Component = styled(Box)({
    marginTop: 20,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
});

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending'
};

const AddInvoice = ({ setAddInvoice }) => {
    const [invoice, setInvoice] = useState(defaultObj);

    const onValueChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    };

    const addNewInvoice = async () => {
        try {
            await saveInvoice({ ...invoice, amount: Number(invoice['amount']) });
            // You might want to call setAddInvoice or reset form here
        } catch (error) {
            console.error('Failed to save invoice:', error);
        }
    };

    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField
                    variant="standard"
                    placeholder="Enter Vendor Name"
                    onChange={onValueChange}
                    name="vendor"
                    autoComplete="off"
                />
                <TextField
                    variant="standard"
                    placeholder="Enter Product Name"
                    onChange={onValueChange}
                    name="product"
                    autoComplete="off"
                />
                <TextField
                    variant="standard"
                    placeholder="Enter Amount in $"
                    type="number"
                    onChange={onValueChange}
                    name="amount"
                    autoComplete="off"
                />
                <TextField
                    variant="standard"
                    placeholder="Enter Date"
                    type="date"
                    onChange={onValueChange}
                    name="date"
                    autoComplete="off"
                />
                <Button variant="contained" onClick={addNewInvoice}>
                    Add Invoice
                </Button>
            </Box>
        </Component>
    );
};

export default AddInvoice;
