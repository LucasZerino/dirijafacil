import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import { ITeamMemberProps } from 'src/types/team';

import ElearningTeamItem from './elearning-team-item';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function ElearningTeam({ members }: Props) {
  return (
    <Container id='equipe'
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack spacing={3} sx={{ maxWidth: 480, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h2">Conheça nosa equipe</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
        Nossa equipe é experiente e treinada para atender a cada aluno de maneira personalizada.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          py: { xs: 8, md: 10 },
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <ElearningTeamItem key={member.id} member={member} />
        ))}
      </Box>

      <Stack alignItems="center">
        <Button variant="outlined" size="large" color="inherit" target='_blank' href='https://api.whatsapp.com/send?phone=558499273698&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20autoescola%20Dirija%20F%C3%A1cil%20Natal.%20Encontrei%20voc%C3%AAs%20pelo%20site!' startIcon={<Iconify icon="ri:whatsapp-fill" />}>
                  Fale Conosco
        </Button>
      </Stack>
    </Container>
  );
}
