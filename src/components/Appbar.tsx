import { AppBar, Container, CssBaseline, Slide, Toolbar, useScrollTrigger, Box } from '@mui/material';
import React from 'react';
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

function Appbar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{backgroundColor: "#005CA9"}}>
          <Toolbar>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{maxWidth: '100px'}}>
              <img
                src={logo}
                alt="Vote 10777"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>

            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Minha App
            </Typography> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <Container>
        {/* <Carousel /> */}
      </Container>

    </React.Fragment>
  );
}

export default Appbar;