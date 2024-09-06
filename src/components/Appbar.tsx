import { AppBar, Container, CssBaseline, Slide, Toolbar, useScrollTrigger, Box, Button, IconButton, Drawer, ListItem, ListItemText, Divider } from '@mui/material';
import { List, X } from "@phosphor-icons/react";
import React, { useState } from 'react';
import logo from './../assets/img/logo.png'

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const button = {
  color: '#FFF',
  alignItems: 'center'
}

function Appbar(props: Props) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      setDrawerOpen(false);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "#005CA9" }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ maxWidth: '100px' }}>
              <img
                src={logo}
                alt="Vote 10777"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>

            {/* Botões no desktop */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button sx={button} onClick={() => handleScroll('home')}>
                Home
              </Button>
              <Button sx={button} onClick={() => handleScroll('quemsou')}>
                Quem sou eu
              </Button>
              <Button sx={button} onClick={() => handleScroll('propostas')}>
                Propostas
              </Button>
              <Button sx={button} onClick={() => handleScroll('contato')}>
                Contato
              </Button>
              <Button sx={button} onClick={() => handleScroll('saibaMais')}>
                Saiba Mais
              </Button>
            </Box>

            {/* Ícone de menu no mobile */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              {!isDrawerOpen ? (
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    transform: isDrawerOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}>
                  <List size={32} weight="bold" />
                </IconButton>

              ) : (
                <IconButton edge="start" color="inherit" aria-label="close" onClick={handleDrawerToggle}
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    transform: isDrawerOpen ? 'rotate(0deg)' : 'rotate(90deg)',
                  }}>
                  <X size={32} weight="bold" />
                </IconButton>
              )}
            </Box>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <Container>
        {/* <Carousel /> */}
      </Container>


      {/* Menu que abre no mobile  */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle} PaperProps={{
        sx: {
          backgroundColor: 'rgba(0,92,169,0.4)',
          boxShadow: 'none',
          backdropFilter: 'blur(8px)',
        },
      }}>
        <Box sx={{ height: '100%', width: '190px', color: '#FFF' }}>
          <Box>
            <img
              src={logo}
              alt="Vote 10777"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <Divider sx={{ opacity: 0.1, background: '#fff' }} />

          <ListItem button onClick={() => handleScroll('home')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleScroll('quemsou')}>
            <ListItemText primary="Quem sou eu" />
          </ListItem>
          <ListItem button onClick={() => handleScroll('propostas')}>
            <ListItemText primary="Propostas" />
          </ListItem>
          <ListItem button onClick={() => handleScroll('contato')}>
            <ListItemText primary="Contato" />
          </ListItem>
          <ListItem button onClick={() => handleScroll('saibaMais')}>
            <ListItemText primary="Saiba Mais" />
          </ListItem>
        </Box>
      </Drawer>

    </React.Fragment>
  );
}

export default Appbar;