import { createMuiTheme } from '@material-ui/core/styles'

const $headerFont: string = "'Bebas Neue', cursive";
const $bodyFont: string = "'Lato', sans-serif";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#0D1F22' },
        secondary: { main: '#6f732f' },
        //third color : #3c5233
        text: {
            primary: '#0D1F22',
        },
    },

    typography: {
        h1: {
            fontFamily: $headerFont,
            fontWeight: 400,
        },
        h2: {
            fontFamily: $headerFont,
            fontWeight: 400,
            position: 'relative',
            '&:after': {
                content: '" "',
                display: 'block',
                backgroundColor: '#0D1F22',
                height: '5px',
                width: '25px',
                position: 'absolute',
                bottom: '-15px',
            },
        },
        h3: {
            fontFamily: $headerFont,
            fontWeight: 400,
            marginBottom: '25px',
            position: 'relative',
            '&:after': {
                content: '" "',
                display: 'block',
                backgroundColor: '#6f732f',
                height: '5px',
                width: '25px',
                position: 'absolute',
                bottom: '-15px',
            },
        },
        h4: {
            fontFamily: $headerFont,
            fontWeight: 400,
        },
        h5: {
            fontFamily: $headerFont,
            fontWeight: 400,
        },
        h6: {
            fontFamily: $bodyFont,
            fontWeight: 700,
            lineHeight: '1.25',
        },
        body1: {
            fontFamily: $bodyFont,
            fontWeight: 400,
            marginBottom: '25px',
        },
    }
});

export default theme