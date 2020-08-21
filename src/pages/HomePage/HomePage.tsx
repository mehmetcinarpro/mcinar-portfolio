import React from 'react';
import { Link } from 'react-router-dom';
// Assets
import mehmetCinar from '../../assets/images/me.png';
// Styles
import styles from "./HomePage.module.scss";
// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Components
import About from '../../components/About/About';
import Portfolio from '../../components/Portfolio/Portfolio';

const HomePage: React.FC = () => {
    return (
        <>
            <div className={styles.root}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={6} container direction="column" justify="center">
                            <Typography variant="h3">
                                Hi, I'm Mehmet,
                            </Typography>
                            <Typography variant="h4">
                                a full-stack developer based in Belgium.
                            </Typography>
                            <Grid item xs={12} sm={4}>
                                <Button component={Link} variant="contained" size="large" color="secondary" to="/portfolio" className={styles.button}>
                                    My Portfolio
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} container justify="center">
                            <img src={mehmetCinar} alt="Mehmet Cinar" className={styles.image} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <About />
            <Portfolio />

        </>
    )
}

export default HomePage;
