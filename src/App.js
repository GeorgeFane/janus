import React from 'react';
import { Box, Toolbar } from '@mui/material';

import Header from './components/Header';
import BasicGrid from './components/BasicGrid';
import EventPage from './components/EventPage';

export default function App() {
    const [page, set_page] = React.useState(1);

    const pages= [
        <BasicGrid />,
        <EventPage />,
    ];

    return (
        <Box>
            <Header />
            <Toolbar />
            <Toolbar />

            {pages[page]}
        </Box>
    );
}
