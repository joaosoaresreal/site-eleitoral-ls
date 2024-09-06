import { Box, Divider, Link, Typography } from "@mui/material";
import { EnvelopeSimple, FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import logo from './../assets/img/logo.png'

const rodape = {
    backgroundColor: '#005CA9',
    color: '#FFF',
    paddingRight: '10%',
    paddingLeft: '10%',
    paddingTop: '2%',
    paddingBottom: '3%'
}


const contatos = {
    display: 'flex',
    gap: '5%',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'rigth', md: 'flex-start' },
    justifyContent: { md: 'space-between' },
}

const logos = {
    // border: '2px solid #000',
    // borderRadius: '50%', // Define um círculo perfeito
    height: '60px',
    width: '60px', // Define a largura igual à altura
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s', // Suaviza a transição da cor de fundo
    padding: 0,
    // '&:hover': {
    //     backgroundColor: '#1d1d1d', // Cor de fundo ao passar o mouse
    // },
}

const Rodape = () => {
    return (
        <Box sx={rodape} id="saibaMais">
            <Box sx={contatos}>
                <Box>
                    <Typography variant="h6" component="h1">
                        Saiba Mais
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '3%' }}>
                        <Box sx={logos}>
                            <Link href="https://www.instagram.com/lourdes.struziati" target="_blank" sx={{ textDecoration: 'none', color: '#fff0ff', display: 'flex' }}>
                                <InstagramLogo size={50} weight="duotone" />
                            </Link>
                        </Box>

                        <Box sx={logos}>
                            <Link href="https://www.facebook.com/lourdes.struziati" target="_blank" sx={{ textDecoration: 'none', color: '#fff0ff', display: 'flex' }}>
                                <FacebookLogo size={50} weight="duotone" />
                            </Link>
                        </Box>

                        {/* <Box sx={logos}>
                            <Link href="" target="_blank" sx={{ textDecoration: 'none', color: '#fff0ff', display: 'flex' }}>
                                <ThreadsLogo size={40} weight="duotone" />
                            </Link>
                        </Box> */}
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h6" component="h1">
                        Contato
                    </Typography>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <EnvelopeSimple size={32} weight="duotone" />
                            <Typography sx={{ marginLeft: 1 }}>
                                <Link href="mailto:falecom@lourdesstruziati.com.br" sx={{ textDecoration: 'none', color: 'inherit' }}>
                                    falecom@lourdesstruziati.com.br
                                </Link>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <WhatsappLogo size={32} weight="duotone" />
                            <Typography sx={{ marginLeft: 1 }}>
                                <Link href="https://wa.me/556796100819?text=Ol%C3%A1%20Lourdes%2C%0Aestava%20vendo%20seu%20site%20e%20gostaria%20de%20lhe%20contatar" target="_blank" sx={{ textDecoration: 'none', color: 'inherit' }}>
                                    (67) 99610-0819
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>


                <Box
                    sx={{ maxWidth: '30vh', display: 'flex', justifyContent: 'flex-end' }}
                >
                    <img
                        src={logo}
                        alt="Vote 10777"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Box>
            </Box>

            <Divider sx={{ opacity: 0.8, paddingTop: '2%' }}/>
            <Box sx={{ textAlign: 'center', paddingTop: '2%' }}>
                <Typography component="h1">
                    REPUBLICANOS / MDB / PODE / PSB / UNIÃO / PSD / Federação PSDB CIDADANIA (PSDB/CIDADANIA)
                </Typography>
                <Typography component="h1">
                    Federação BRASIL DA ESPERANÇA - FE BRASIL (PT/PC do B/PV)
                </Typography>
                <Typography component="h1">
                    CNPJ: 56.470.575/0001-22
                </Typography>
            </Box>

            {/* <Box sx={{
                justifyContent: 'center',
                textAlign: 'center',
                color: '#FFF',
                paddingBottom: '2%',
                paddingTop: '3%'
            }}>
                <Typography
                    sx={{
                        textDecoration: 'none'
                    }}
                >
                    Desenvolvido por <Link href="http://www.joaosoares.dev.br" target="_blank" sx={{ textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s ease', '&:hover': { color: '#1d1d1d' } }}>joaosoaresreal</Link> © 2024
                </Typography>
            </Box> */}

        </Box>
    )
}

export default Rodape;