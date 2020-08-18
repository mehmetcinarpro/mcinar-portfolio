import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from "./Navbar.module.scss";
// Data
import menu from '../../data/menu';
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import MuiLink from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuIcon from "@material-ui/icons/Menu";

const Navbar: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <Link to="/" className={styles.title}>
                                <Typography variant="h4" noWrap>Mehmet Cinar</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs />
                        {menu.map(({ name, path }) => (
                            path.includes("http")
                                ? <Button component={MuiLink} color="inherit" href={path}>{name}</Button>
                                : <Button component={Link} color="inherit" to={path}>{name}</Button>
                        ))}
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;