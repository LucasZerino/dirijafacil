import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import Button, { buttonClasses } from '@mui/material/Button';

import { useResponsive } from 'src/hooks/use-responsive';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

export default function Footer() {
  const mdUp = useResponsive('up', 'md');

  return (
    <footer>
      <Divider />
      <Container
        sx={{
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <Logo />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Auto Escola Natal: sua parceira para conquistar a CNH em Natal, RN. Oferecemos aulas teóricas e práticas de direção com instrutores qualificados.
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Redes Sociais</Typography>
                <Stack direction="row" alignItems="center">
                  <IconButton color="primary" href="https://api.whatsapp.com/send?phone=558499273698&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20autoescola%20Dirija%20F%C3%A1cil%20Natal.%20Encontrei%20voc%C3%AAs%20pelo%20site!" target="_blank">
                    <Iconify icon="mdi:whatsapp" />
                  </IconButton>
                  <IconButton color="primary" href="https://www.instagram.com/dirijafacilnatal/" target="_blank">
                    <Iconify icon="mdi:instagram" />
                  </IconButton>
                </Stack>
              </Stack>

            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              <Stack spacing={2}>
                <Typography variant="h6">Sobre Nós</Typography>
                <Link variant="body2" href="#sobre" >Nossa História</Link>
                <Link variant="body2" href="#equipe" >Equipe</Link>
                <Link variant="body2">Auto Escola</Link>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Suporte</Typography>
                <Link variant="body2" href="#faq" >FAQ</Link>
                <Link variant="body2" href="https://wa.me/558499273698" target="_blank" >Contato</Link>
                <Link variant="body2" >CFC em Natal RN</Link>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Recursos</Typography>
                <Link variant="body2">Blog</Link>
                <Link variant="body2">Simulados</Link>
                <Link variant="body2">Material de Estudo</Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2023 Auto Escola Natal. Todos os direitos reservados.
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="caption" sx={{ color: 'text.secondary' }} href="https://wa.me/558499273698" target="_blank">
              Central de Ajuda
            </Link>

            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Termos de Serviço
            </Link>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }: StackProps) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}