import React from 'react';
// Styles
import styles from "./CardModal.module.scss";
// Models
import PortfolioItem from '../../models/PortfolioItem';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import Close from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const CardModal: React.FC<PortfolioItem> = ({ projectName, projectOver, projectDescription, projectURL, githubURL, imgSrc }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" size="large" color="secondary" onClick={handleOpen}>
                {projectName} <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.arrowPadding} />
            </Button>

            <Dialog
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={styles.modal}
                open={open}
                onClose={handleClose}
                fullScreen
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Slide in={open} direction="up">
                    <div className={styles.overlayDiv}>

                        <Button size="large" className={styles.icon} onClick={handleClose}>
                            <Close />
                        </Button>

                        <Container>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} >
                                    <Typography variant="h3">
                                        {projectName}
                                    </Typography>
                                    <Typography variant="body1">
                                        {projectOver}
                                    </Typography>
                                    <div className={styles.btnContainer}>
                                        <Button variant="contained" size="large" color="secondary" href={projectURL} target="_blank">
                                            View Project
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="contained" size="large" color="secondary" href={githubURL} target="_blank">
                                            View Github Repository
                                         </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <img src={imgSrc} alt={projectName} className={styles.responsiveImg} />
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Slide>
            </Dialog>
        </div>
    )
}

export default CardModal;
