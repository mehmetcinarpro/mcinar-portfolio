import React from 'react';
import portfolio from '../../data/portfolio';
// Styles
import styles from "./Portfolio.module.scss";
// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// Components
import CardModal from '../CardModal/CardModal';

const Portfolio: React.FC = () => {
    return (<div className={styles.root}>
        <Container>
            <Grid container spacing={3}>
                <Grid item container justify="center" >
                    <Typography variant="h3">
                        My Portfolio
                    </Typography>
                </Grid>
                {portfolio.length ? (
                    portfolio.map((portfolio) => (
                        <Grid key={portfolio.projectName} item xs={12} sm={6} md={4}>
                            <Card className={styles.root}>
                                <CardMedia
                                    component="img"
                                    alt={portfolio.projectName}

                                    title={portfolio.projectName}
                                    src={portfolio.imgSrc}
                                />
                                <CardContent>
                                    <CardModal {...portfolio} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : ('')

                }
            </Grid>
        </Container>
    </div>
    )
}

export default Portfolio;
