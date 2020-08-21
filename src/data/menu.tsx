import React from 'react';
// Models
import MenuItem from '../models/MenuItem';
// Material UI
import GitHubIcon from '@material-ui/icons/GitHub';

const menu: MenuItem[] = [
    {
        name: 'About Me',
        path: '/about'
    },
    {
        name: 'Portfolio',
        path: '/portfolio'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: <GitHubIcon />,
        path: 'https://github.com/mehmetcinarpro'
    }
];

export default menu;