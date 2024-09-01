// import React, { useState } from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Drawer,
//     Box,
//     Button,
//     CssBaseline,
//     Slide,
//     useScrollTrigger,
// } from '@mui/material';
// import { FacebookLogo, InstagramLogo, List, WhatsappLogo } from "@phosphor-icons/react";
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// const navItems = ['Home', 'Sobre', 'Contato'];

// interface Props {
//     window?: () => Window;
//     children?: React.ReactNode;
// }

// function HideOnScroll(props: Props) {
//     const { children, window } = props;
//     const trigger = useScrollTrigger({
//         target: window ? window() : undefined, // Certifique-se de que `window` está corretamente passado
//         disableHysteresis: true,
//         threshold: 100, // Ajuste conforme necessário
//     });

//     return (
//         <Slide appear={false} direction="down" in={!trigger}>
//             <>
//                 {children}
//             </>
//         </Slide>
//     );
// }

// const ResponsiveAppBar: React.FC<Props> = (props) => {
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     const drawer = (
//         <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//             <Typography variant="h6" sx={{ my: 2 }}>
//                 Minha App
//             </Typography>
//             <div>
//                 a
//                 b
//             </div>
//         </Box>
//     );

//     return (
//         <>
//             <CssBaseline />
//             <HideOnScroll {...props}>
//                 <AppBar position="fixed">
//                     <Toolbar>
//                         {isMobile && (
//                             <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//                                 {/* <MenuIcon /> */}
//                                 <List size={32} />
//                             </IconButton>
//                         )}
//                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                             Minha App
//                         </Typography>
//                         {!isMobile && (
//                             <Box sx={{ display: 'flex' }}>
//                                 {navItems.map((item) => (
//                                     <Button key={item} sx={{ color: '#fff' }}>
//                                         {item}
//                                     </Button>
//                                 ))}

//                                 <WhatsappLogo size={32} />
//                                 <InstagramLogo size={32} />
//                                 <FacebookLogo size={32} />
//                             </Box>
//                         )}
//                     </Toolbar>
//                 </AppBar>
//             </HideOnScroll>

//             <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
//                 {drawer}
//             </Drawer>

//             {/* Spacer to avoid content being covered by the AppBar */}
//             <Toolbar />
            
//         </>
//     );
// };

// export default ResponsiveAppBar;


import { AppBar, Container, CssBaseline, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React from 'react';
// import { Carousel } from './components/Carousel';


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
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Minha App
            </Typography>
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