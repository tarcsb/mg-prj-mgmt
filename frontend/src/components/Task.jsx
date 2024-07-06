import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';

const Task = ({ title, status, contactEmail, details }) => (
    <Card>
        <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Chip label={status} color="primary" />
            <Typography variant="body1">{details}</Typography>
            {contactEmail && <Typography variant="body2">Contact: {contactEmail}</Typography>}
        </CardContent>
    </Card>
);

export default Task;
