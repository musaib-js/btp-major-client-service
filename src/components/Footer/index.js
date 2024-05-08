import React from 'react';
import { useMediaQuery } from '@mui/material';
import Appbar from './Appbar'
import Footer from './Footer';

const Index = () => {
    const isTabletOrBelow = useMediaQuery('(max-width: 960px)');
    return (
        <>
            {isTabletOrBelow ? (
                <Appbar />
            ) : (
                <Footer />
            )}
        </>
    );
};

export default Index;
