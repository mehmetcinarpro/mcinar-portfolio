import React from 'react';
// Styles
import styles from "./About.module.scss";
// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Assets
import mehmetCinar from '../../assets/images/mehmet-cinar.jpg';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faSass,
    faJs,
    faNodeJs,
    faReact,
    faAngular,
    faBootstrap,
    faAdobe
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faCheck,
    faAd
} from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
    return (
        <div className={styles.root}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item container justify="center" >
                        <Typography variant="h3">
                            About Me
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={mehmetCinar} alt="Mehmet Cinar" className={styles.image} />
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida interdum molestie. Proin maximus erat velit. Cras feugiat diam at ipsum posuere vulputate. Nunc pulvinar et lectus nec scelerisque. Nulla vitae enim dignissim, pellentesque leo in, posuere sapien. Etiam ac hendrerit est. Fusce egestas augue nibh, tincidunt accumsan magna consectetur efficitur. Aenean pretium tempor molestie. Integer consequat suscipit elit sed sollicitudin. Duis eu finibus nibh. Aliquam tristique in libero sed hendrerit. Suspendisse pharetra nisi et lectus facilisis placerat. Sed vitae elit mattis, sodales sapien vitae, aliquam neque. Phasellus volutpat nisi mauris, quis posuere diam porttitor ac.
                    </Typography>
                        <Typography variant="body1">
                            Phasellus sit amet neque sed enim cursus venenatis. Donec a interdum odio. Mauris eu ullamcorper mi, vitae sodales eros. Donec euismod aliquet semper. Integer nec ante risus. Pellentesque fermentum neque mattis libero dapibus semper. Proin vehicula erat eu orci cursus interdum. Etiam tincidunt orci id aliquet porttitor. Etiam iaculis, lacus tincidunt porttitor venenatis, massa orci sagittis ipsum, in dignissim eros ante in elit.
                    </Typography>
                        <Button variant="contained" size="large" color="secondary" href="https://mehmetcinar.be/assets/pdfs/mehmet-cinar_resume.pdf" target="_blank">
                            Download Resume
                    </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h4">
                            Skillset
                        </Typography>
                        <List>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faNodeJs} className={styles.icon} /> Node.js
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faDatabase} className={styles.icon} /> MySQL
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faJs} className={styles.icon} /> JavaScript/TypeScript
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faSass} className={styles.icon} /> SCSS/CSS
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faHtml5} className={styles.icon} /> HTML5
                            </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h4">
                            Frameworks
                    </Typography>
                        <List>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faReact} className={styles.icon} /> React
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faAngular} className={styles.icon} /> Angular
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faBootstrap} className={styles.icon} /> Bootstrap
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.icon} /> Materialize
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.icon} /> Foundation
                            </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h4">
                            Other Skills
                    </Typography>
                        <List>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faAdobe} className={styles.icon} /> Adobe InDesign, Photoshop, Illustrator, Premiere
                            </ListItemText>
                            </ListItem>
                            <ListItem className={styles.skillList}>
                                <ListItemText className={styles.skillItem}>
                                    <FontAwesomeIcon icon={faAd} className={styles.icon} /> Google AdWords, Facebook &amp; Instagram Ads
                            </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About;
