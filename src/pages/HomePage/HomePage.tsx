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
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h3">
                            Portfolio
                    </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida interdum molestie. Proin maximus erat velit. Cras feugiat diam at ipsum posuere vulputate.
                    </Typography>
                        <Button component={Link} variant="contained" size="large" color="secondary" to="/portfolio">
                            View Portfolio
                    </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h3">
                            About Me
                    </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida interdum molestie. Proin maximus erat velit. Cras feugiat diam at ipsum posuere vulputate.
                    </Typography>
                        <Button component={Link} variant="contained" size="large" color="secondary" to="/about">
                            Learn More
                    </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h3">
                            Contact Me
                    </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida interdum molestie. Proin maximus erat velit. Cras feugiat diam at ipsum posuere vulputate.
                    </Typography>
                        <Button component={Link} variant="contained" size="large" color="secondary" to="/contact">
                            Contact Me
                    </Button>
                    </Grid>
                </Grid>
            </Container >
        </>
    )
}

export default HomePage;
