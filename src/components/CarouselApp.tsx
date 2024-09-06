import { Box } from "@mui/material";
import capa from "./../assets/img/capa-site.jpg"
import quemsou from "./../assets/img/quem-sou-eu.jpg"
import galeria from "./../assets/img/galeria-fotos.jpg"
import sobre from "./../assets/img/sobre.jpg"

export function CarouselApp() {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" id="home">
                <img 
                    src={capa}
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" id="quemsou">
                <img 
                    src={quemsou} 
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                    src={galeria} 
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                    src={sobre}
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
        </>
    );
}
