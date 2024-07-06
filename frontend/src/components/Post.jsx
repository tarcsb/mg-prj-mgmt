import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Post = ({ title, content }) => (
    <Card>
        <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{content}</Typography>
        </CardContent>
    </Card>
);

export default Post;
