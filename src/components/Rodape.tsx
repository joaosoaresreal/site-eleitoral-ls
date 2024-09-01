import { Box, Link, Typography } from "@mui/material";
import { EnvelopeSimple, FacebookLogo, InstagramLogo, ThreadsLogo, WhatsappLogo } from "@phosphor-icons/react";
// import EmailIcon from '@mui/icons-material/Email';

const rodape = {
    // display: 'flex',
    backgroundColor: '#005CA9',
    color: '#FFF',
    paddingRight: '10%',
    paddingLeft: '10%',
    paddingTop: '2%',
    // minHeight: '250px'
}

const colorTexto = {
    color: '#FFF'
}

const contatos = {
    display: 'flex',
    gap: '5%'
    // padding: '2%'
}

const Rodape = () => {
    return (
        <Box sx={rodape}>
            <Box sx={contatos}>
                <Box>
                    LOGO AQUI
                </Box>

                <Box>
                    <Typography>
                        Saiba Mais
                    </Typography>
                    <Box>
                        <InstagramLogo size={32} weight="light" />
                        <FacebookLogo size={32} weight="light" />
                        <ThreadsLogo size={32} weight="light" />
                        {/* <WhatsappLogo size={32} weight="light" /> */}
                    </Box>
                </Box>

                <Box>
                    <Typography>
                        Contato
                    </Typography>
                    <Box>
                        <Typography>
                            <EnvelopeSimple size={32} weight="light" />
                            falecom@lourdesstruziati.com.br
                        </Typography>
                        <Typography>
                            <WhatsappLogo size={32} weight="light" />
                            <Link href="https://wa.me/5567998096541?text=Ol%C3%A1%20Lourdes%2C%0Aestava%20vendo%20seu%20site%20e%20gostaria%20de%20lhe%20contatar" target="_blank" sx={{ textDecoration: 'none', color: 'inherit' }}>
                                (67) 99999-8888
                            </Link>
                        </Typography>



                    </Box>
                </Box>
            </Box>

            <Box sx={{
                justifyContent: 'center',
                textAlign: 'center',
                color: '#FFF',
                paddingBottom: '1%',
                paddingTop: '2%'
            }}>
                <Typography
                    sx={{
                        textDecoration: 'none'
                    }}
                >
                    Desenvolvido por <Link href="http://www.joaosoares.dev.br" target="_blank" sx={{ textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s ease', '&:hover': { color: '#000' } }}>joaosoaresreal</Link> © 2024
                </Typography>
            </Box>

        </Box>
    )
}

export default Rodape;