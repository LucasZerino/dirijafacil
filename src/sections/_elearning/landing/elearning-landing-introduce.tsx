import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ElearningLandingIntroduce() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container id='sobre'
      sx={{
        py: { xs: 8, md: 15 },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          color: 'primary.main',
          mb: { xs: 2, md: 10 },
        }}
      >
        Sobre nós.
      </Typography>

      <Grid
        container
        spacing={3}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image
              alt="about"
              src="/assets/dirijafacil/AutoEscolaEmNatal.png"
              ratio="4/6"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Por que ser Dirija Fácil?
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
          A Dirija Fácil Natal foi fundada com o propósito de ser mais do que uma simples autoescola. 
          Nossa missão é oferecer um ensino personalizado, onde cada instrutor entende as necessidades e o 
          ritmo de cada aluno. Acreditamos que cada pessoa possui desafios únicos, e, por isso, nossos instrutores são 
          capacitados para adaptar suas abordagens, proporcionando uma experiência de aprendizado tranquila, eficiente 
          e de alta qualidade. Nosso objetivo é fazer com que cada aluno saia das nossas aulas confiante e preparado 
          para enfrentar o trânsito com segurança.
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 5, md: 10 }}
            sx={{ mt: { xs: 8, md: 10 } }}
          >
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
              Nossos instrutores são treinados para identificar e se adaptar às necessidades de cada aluno, garantindo 
              que todos aprendam no seu ritmo.
              </Typography>
            </Stack>

            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
              Utilizamos metodologias modernas e eficazes para proporcionar uma experiência de aprendizado completa, 
              com foco em segurança e confiança.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
