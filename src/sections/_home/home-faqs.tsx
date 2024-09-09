import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { useResponsive } from 'src/hooks/use-responsive';

import Pattern01 from 'src/assets/illustrations/pattern/pattern-01';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CONTENTS = [
  {
    question: 'Quais documentos são necessários para se matricular na autoescola?',
    answer: 'Para se matricular, você precisará do RG, CPF, comprovante de residência e, se aplicável, sua CNH provisória.',
  },
  {
    question: 'Quanto tempo demora para concluir o processo de habilitação?',
    answer: 'O tempo médio é de 3 a 4 meses, variando de acordo com a disponibilidade de horários para as aulas e exames.',
  },
  {
    question: 'Quais categorias de habilitação a autoescola oferece?',
    answer: 'Oferecemos cursos para as categorias A (moto), B (carro), e AB (carro e moto), além de adição e mudança de categoria.',
  },
  {
    question: 'O que está incluso no valor do curso?',
    answer: 'O valor inclui as aulas teóricas, práticas, simulador e material didático.',
  },
  {
    question: 'A autoescola oferece aulas práticas aos finais de semana?',
    answer: 'Sim, oferecemos aulas práticas aos sábados para melhor atender os alunos com agendas apertadas durante a semana.',
  },
  {
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Aceitamos pagamentos via cartão de crédito, débito, transferência bancária e parcelamento direto com a autoescola.',
  },
];

// ----------------------------------------------------------------------

export default function HomeFAQs() {
  const smUp = useResponsive('up', 'sm');

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Perguntas Frequentes
            </Typography>
          </m.div>

          <Box
            sx={{
              my: { xs: 8, md: 10 },
            }}
          >
            {CONTENTS.map((faq) => (
              <m.div key={faq.question} variants={varFade().in}>
                <Accordion
                  expanded={expanded === faq.question}
                  onChange={handleChangeExpanded(faq.question)}
                >
                  <AccordionSummary
                    sx={{
                      minHeight: 64,
                      borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
                      [`& .${accordionSummaryClasses.content}`]: {
                        p: 0,
                        m: 0,
                      },
                      [`&.${accordionSummaryClasses.expanded}`]: {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      {faq.question}
                    </Typography>

                    <Iconify
                      width={24}
                      icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                    />
                  </AccordionSummary>

                  <AccordionDetails>{faq.answer}</AccordionDetails>
                </Accordion>
              </m.div>
            ))}
          </Box>

          <Box
            sx={{
              borderWidth: 1,
              borderRadius: 3,
              textAlign: 'center',
              borderStyle: 'dashed',
              borderColor: (theme) => alpha(theme.palette.grey[500], 0.32),
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 8 },
            }}
          >
            <m.div variants={varFade().inUp}>
              <Typography variant="h3">Ficou com dúvidas?</Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Entre em contato conosco pelo WhatsApp para esclarecer suas dúvidas.
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Button
                size="large"
                color="inherit"
                variant="contained"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=558499273698&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20autoescola%20Dirija%20F%C3%A1cil%20Natal.%20Encontrei%20voc%C3%AAs%20pelo%20site!', '_blank')}
                startIcon={<Iconify icon="carbon:whatsapp" />}
              >
                Fale conosco
              </Button>
            </m.div>
          </Box>
        </Grid>
      </Grid>

      {smUp && (
        <Pattern01
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            maxWidth: 600,
            maxHeight: 600,
          }}
        />
      )}
    </Container>
  );
}
