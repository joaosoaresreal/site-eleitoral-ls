import { Box } from "@mui/material";

export function CarouselApp() {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                    src="src\assets\img\capa-site.png" 
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                    src="src\assets\img\quem-sou-eu.png" 
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                    src="src\assets\img\galeria-fotos.png" 
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                    src="src\assets\img\sobre.png" 
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>
        </>
    );
}
