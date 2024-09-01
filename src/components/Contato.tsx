import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Contato: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (

        <>

            <Box display="flex" justifyContent="center" alignItems="center">
                <img
                    src="src\assets\img\contato.png"
                    alt="Vote 10777"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Box>

            {/* <Box
            sx={{
                background: '#009E3D',
                maxWidth: '100%'
            }}
        > */}
            {/* <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', // Coluna única no mobile, duas colunas em telas maiores
                    gap: 2, // Espaçamento entre colunas
                    maxWidth: '80%',
                    margin: 'auto',
                    padding: 2,
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        gridColumn: isMobile ? '1 / 2' : '1 / 2', // Ocupa toda a coluna no mobile
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#FFF'
                    }}
                >
                    <Typography variant="h3" component="h1" gutterBottom>
                        CONHEÇA MINHAS PROPOSTAS
                    </Typography>
                    <Typography variant="body1" paragraph>
                        É professora, especialista em educação, teóloga e advogada.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <ul>
                            <li>Formada em pedagogia, teologia e direito.</li>
                            <li>Pós-graduada em educação e ensino superior.</li>
                            <li>Especialista em Direitos Humanos pela UFGD.</li>
                        </ul>
                        Além disso, é catequista, palestrante, voluntária como apresentadora na rádio Radio Coração FM 95,7 (Programa Coração Franciscano). Fez trabalho voluntário por 5 anos e meio na PED e UNEI masculino e feminino de Dourados. Foi Presidente do Rotary Club de Itaporã (2023-2024) e presidente do SIMTED - Sindicato Municipal dos Trabalhadores em Educação. Atualmente ingressa no conselho do Rotary.
                    </Typography>

                </Box>
                <Box
                    sx={{
                        gridColumn: isMobile ? '1 / 2' : '2 / 3', // Ocupa toda a coluna no mobile e coluna 2 em telas maiores
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            boxShadow: '135px 36px 197px -60px rgba(253,195,0,1);', // Sombra suave
                            borderRadius: 8,
                            overflow: 'hidden',
                            width: '100%',
                            maxWidth: 400, // Limita a largura máxima da imagem
                        }}
                    >
                        <img
                            src="src\assets\img\lourdes-frente.jpg"
                            alt="Maria de Lourdes Struziati Rodrigues"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </Box>
                </Box>
                <Typography variant="h5" paragraph color={'#FFF'}>
                    Seu Lema - “Estar onde precisam de mim”
                </Typography> */}
            {/* </Box> */}
            {/* </Box> */}
        </>
    );
};

export default Contato;
