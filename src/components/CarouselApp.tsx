import { Box } from "@mui/material";
import capa from "./../assets/img/capa-site.png"
import quemsou from "./../assets/img/quem-sou-eu.png"
import galeria from "./../assets/img/galeria-fotos.png"
import sobre from "./../assets/img/sobre.png"

export function CarouselApp() {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                    src={capa}
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
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
