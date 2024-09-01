import { Box, Toolbar } from '@mui/material'
import Appbar from './components/Appbar'
import { CarouselApp } from './components/CarouselApp'
import Cartao from './components/Cartao'
import Propostas from './components/Propostas'
// import CarouselApp from './components/CarouselApp'
// import { Carousel } from './components/CarouselApp'


function App() {

  return (
    <>
      <Appbar/>
      <CarouselApp/>
      <Propostas/>
      <Cartao/>
      {/* <Toolbar /> */}
      {/* <Box>
        <CarouselApp/>

      </Box> */}
      {/* teste */}
    </>
  )
}

export default App

// import { AppBar, Container, CssBaseline, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
// import React from 'react';
// import { Carousel } from './components/Carousel';


// interface Props {
//   window?: () => Window;
//   children: React.ReactElement;
// }

// function HideOnScroll(props: Props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// function App(props: Props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <HideOnScroll {...props}>
//         <AppBar>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Minha App
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar />

//       <Container>
//         {/* <Carousel /> */}
//       </Container>

//     </React.Fragment>
//   );
// }

// export default App;