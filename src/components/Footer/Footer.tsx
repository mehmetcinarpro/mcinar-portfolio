import React from 'react';
// Styles 
import styles from "./Footer.module.scss";
// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <div className={styles.root}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            <FontAwesomeIcon icon={faReact} className={styles.icon} size="lg" />Built by me with ❤️
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;