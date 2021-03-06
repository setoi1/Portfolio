import React from 'react';
import { AppBar, Toolbar, Typography  } from '@material-ui/core';
import { Link } from 'react-scroll';
import LanguageIcon from '@material-ui/icons/Language';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className="navbar-nav">
        <LanguageIcon className="navbar-icon" />
        <Link className="navbar-navlink"  to="landing-section" spy={true} smooth={true} duration={750}>
          <Typography>Home</Typography>
        </Link>
        <Link className="navbar-navlink"  to="about-section" spy={true} smooth={true} duration={750}>
          <Typography>About</Typography>
        </Link>
        <Link className="navbar-navlink"  to="projects-section" spy={true} smooth={true} duration={750}>
          <Typography>Projects</Typography>
        </Link>
        <Link className="navbar-navlink"  to="contacts-section" spy={true} smooth={true} duration={750}>
          <Typography>Contacts</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
