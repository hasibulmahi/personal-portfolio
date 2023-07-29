import Layout from '@/components/layout';
import { Box } from '@mui/material';
import React from 'react';

function MyTestPage(props) {
    return (
        <Layout>
            <Box sx={{
                marginTop: '64px'
            }}>
            My test page
        </Box>
        </Layout>
    );
}

export default MyTestPage;