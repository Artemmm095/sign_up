import React from 'react';
import {Container} from "@mui/material";

const Divider = () => {
    return (
        <Container style={{
            height: '2px',
            width: '50px',
            display: 'flex',
            backgroundColor: '#DCDCDC',
            padding: '0',
        }}></Container>
    );
};

export default Divider;
