import React from 'react';
// Styles
import styles from "./Banner.module.scss";
// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface BannerProps {
    title: string;
    content: string;
}
const Banner: React.FC<BannerProps> = ({ title, content }) => {
    return (
        <div className={styles.root}>
            <Container>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={styles.header}
                >
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h2" component="h2">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h6">
                            {content}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Banner;
