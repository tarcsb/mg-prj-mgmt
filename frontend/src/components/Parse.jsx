import React, { useState } from 'react';
import { Box, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import api from '../utils/api';

const Parse = ({ onParseComplete }) => {
    const [text, setText] = useState('');
    const [parsedData, setParsedData] = useState(null);

    const handleParse = async () => {
        try {
            const response = await api.post('/parse', { text });
            setParsedData(response.data);
            onParseComplete(response.data);
        } catch (error) {
            console.error('Error parsing text:', error);
        }
    };

    return (
        <Box>
            <TextField
                label="Paste Text Here"
                multiline
                rows={6}
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleParse} sx={{ mt: 2 }}>
                Parse
            </Button>
            {parsedData && (
                <Card sx={{ mt: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Parsed Data</Typography>
                        <Typography variant="body1">Emails: {parsedData.emails.join(', ')}</Typography>
                        <Typography variant="body1">Names: {parsedData.names.join(', ')}</Typography>
                        <Typography variant="body1">Companies: {parsedData.companies.join(', ')}</Typography>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default Parse;
