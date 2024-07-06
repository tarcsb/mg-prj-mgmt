import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6200ea', // Purple
        },
        secondary: {
            main: '#03dac6', // Teal
        },
        error: {
            main: '#b00020', // Red
        },
        background: {
            default: '#ffffff', // White
        },
        text: {
            primary: '#000000', // Black
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default theme;
