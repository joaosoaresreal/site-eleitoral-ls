import React, { useState } from 'react';
import { Alert, Backdrop, Box, Button, CircularProgress, Snackbar, TextField, Typography } from '@mui/material';
import emailjs from '@emailjs/browser'
import contato from "./../assets/img/contato.jpg"

const label = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#FFF',
        },
        '&:hover fieldset': {
            borderColor: '#FFF',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FFF',
        },
    },
    '& .MuiInputLabel-root': {
        color: '#FFF',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#FFF',
    },
    '& .MuiOutlinedInput-input': {
        color: '#FFF',
    },
}

const Contato: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [errors, setErrors] = useState({ nome: '', tel: '', email: '', mensagem: '' });
    const [loading, setLoading] = useState(false); // Estado para controle de carregamento
    const [success, setSuccess] = useState(false); // Estado para controle da mensagem de sucesso


    // Função para validar dados
    const validateFields = () => {
        let valid = true;
        const newErrors = { nome: '', tel: '', email: '', mensagem: '' };

        // Validação do nome
        if (nome === '') {
            newErrors.nome = 'Informe seu nome';
            valid = false;
        }

        // Validação do telefone (somente números e um mínimo de caracteres)
        const telRegex = /^[0-9]+$/;
        if (!telRegex.test(tel) || tel.length < 8) {
            newErrors.tel = 'Telefone inválido.';
            valid = false;
        }

        // Validação do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'Email inválido.';
            valid = false;
        }

        // Validação da Mensagem
        if (mensagem === '' || mensagem.length < 10) {
            newErrors.mensagem = 'Digite uma mensagem com mais de 10 caracteres.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };


    function sendMail() {
        if (validateFields()) {
            setLoading(true);

            const parametros = {
                mensagem_envio: mensagem,
                nome_envio: nome,
                email_envio: email,
                tel_envio: tel
            }

            emailjs.send("service_34t2eno", "template_8rb9w15", parametros, "wQoL-9FrSprwt_oPb")
                .then((response) => {
                    setLoading(false); // Parar o carregamento
                    setSuccess(true);  // Mostrar mensagem de sucesso

                    setNome('')
                    setEmail('')
                    setTel('')
                    setMensagem('')
                })
                .catch((error) => {
                    setLoading(false); // Parar o carregamento
                });
        }
    }

    const handleCloseSnackbar = () => {
        setSuccess(false); // Fechar o snackbar ao completar o autoHideDuration
    };

    return (
        <>
            <Box id="contato" sx={{ position: 'relative', width: '100%', height: '88vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Foto de fundo */}
                <img
                    src={contato}
                    alt="Vote 10777"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(4px)',
                    zIndex: 1,
                }} />
                <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '16px', width: '80%' }}>

                    <Box sx={{ textAlign: 'center', color: '#FFF' }}>
                        <Typography variant="h6" component="h2">
                            Entre em contato através do formulário
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '16px' }}>
                        <TextField id="outlined-basic" label="Seu Nome" variant="outlined" fullWidth sx={label} value={nome}
                            onChange={(e) => setNome(e.target.value)} error={!!errors.nome} helperText={errors.nome}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', gap: '16px' }}>
                        <TextField id="outlined-basic" label="Telefone para Contato" variant="outlined" fullWidth type="tel" sx={label} value={tel}
                            onChange={(e) => setTel(e.target.value)} error={!!errors.tel} helperText={errors.tel}
                        />
                        <TextField id="outlined-basic" label="Email para Contato" variant="outlined" fullWidth type="email" sx={label} value={email}
                            onChange={(e) => setEmail(e.target.value)} error={!!errors.email} helperText={errors.email}
                        />
                    </Box>

                    <Box>
                        <TextField id="outlined-basic" label="Sua Mensagem" variant="outlined" multiline rows={6} fullWidth sx={label} value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)} error={!!errors.mensagem} helperText={errors.mensagem}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
                        <Button variant="contained" onClick={() => sendMail()}>
                            Enviar mensagem
                        </Button>
                    </Box>

                    {/* alertas */}
                    <Snackbar open={success} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                        <Alert
                            severity="success"
                            variant="filled"
                            onClose={handleCloseSnackbar}
                            sx={{ width: '100%', backgroundColor: '#005CA9' }}
                        >
                            Mensagem enviada com sucesso. Em breve entraremos em contato.
                        </Alert>
                    </Snackbar>

                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={loading}
                        onClick={() => { setLoading(false) }}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                </Box>
            </Box >
        </>
    );
};

export default Contato;
