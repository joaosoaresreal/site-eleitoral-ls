import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '10px',
  transition: 'background-color 0.3s ease',
  // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(255,255,255, 0.3) 0px 30px 60px -30px',
    
  },
};

const contentStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const Educacao = () => {
  return (
    <Card sx={cardStyle}>
        <Box sx={contentStyle}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#FFF">
              EDUCAÇÃO
            </Typography>
            <Typography variant="body2" color="#FFF">
              Buscar o apoio para ampliar a oferta de cursos profissionalizantes gratuitos para jovens e adultos, além de buscar e reforçar parcerias com escolas técnicas e universidades, promovendo cursos que capacitem a população para o mercado de trabalho local.
            </Typography>
          </CardContent>
        </Box>
    </Card>
  );
};

const Saude = () => {
  return (
    <Card sx={cardStyle}>
        <Box sx={contentStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#FFF">
            SAÚDE
          </Typography>
          <Typography variant="body2" color="#FFF">
            Implementação de um programa de saúde preventiva com foco em campanhas educativas e atendimento itinerante nas comunidades rurais e bairros periféricos.
            Incentivo à parcerias com ONGs e a iniciativa privada para trazer mutirões de saúde e especialidades médicas que são escassas na cidade.
          </Typography>
        </CardContent>
        </Box>
    </Card>
  );
};

const Agricultura = () => {
  return (
    <Card sx={cardStyle}>
        <Box sx={contentStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#FFF">
            AGRICULTURA
          </Typography>
          <Typography variant="body2" color="#FFF">
            Criação de programas de incentivo ao pequeno produtor, fortalecendo a agricultura familiar, e facilitar o acesso a créditos e a assistência técnica especializada, além de fortalecer a Feira Livre como espaço de comercialização direta entre produtores e consumidores.
          </Typography>
        </CardContent>
        </Box>
    </Card>
  );
};

const Juventude = () => {
  return (
    <Card sx={cardStyle}>
        <Box sx={contentStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#FFF">
            JUVENTUDE
          </Typography>
          <Typography variant="body2" color="#FFF">
            Expansão de projetos esportivos e culturais para jovens como forma de inclusão social.
            Criação de centros de esportes e cultura nos bairros, com foco em atividades como futebol, dança, música e teatro.
          </Typography>
        </CardContent>
        </Box>
    </Card>
  );
};

const Comercio = () => {
  return (
    <Card sx={cardStyle}>
        <Box sx={contentStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#FFF">
            COMÉRCIO
          </Typography>
          <Typography variant="body2" color="#FFF">
            Incentivo ao consumo local por meio de feiras temáticas e campanhas de valorização do comércio de Itaporã. Promoção de eventos regulares que envolvam pequenos empreendedores e produtores locais, destacando a diversidade de produtos e serviços da região.
          </Typography>
        </CardContent>
        </Box>
    </Card>
  );
};

const Inclusao = () => {
  return (
    <Card sx={cardStyle}>
        <Box sx={contentStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#FFF">
            INCLUSÃO SOCIAL
          </Typography>
          <Typography variant="body2" color="#FFF">
            Criação de espaços de lazer acessíveis e programas de apoio para famílias de pessoas com deficiências. Implementação e adaptação de parques e praças para atender pessoas com necessidades especiais e oferecer capacitação para cuidadores.          </Typography>
        </CardContent>
        </Box>
    </Card>
  );
};

const CartoesLayout = () => {
  return (
    <Box id="propostas" sx={{
      padding: 4,
      background: '#005CA9',
      maxWidth: '100%',
      paddingLeft: '10%',
      paddingRight: '10%',
    }}>
      <Typography variant="h5" component="h1" align="center" color={'#FFF'} gutterBottom sx={{paddingBottom: '1%'}}>
        CONHEÇA MINHAS PROPOSTAS
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch" >
        <Grid item xs={12} sm={4} md={4}>
          <Educacao />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Saude />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Agricultura />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Juventude />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Comercio />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Inclusao />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartoesLayout;

