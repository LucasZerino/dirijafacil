import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { ICourseProps } from 'src/types/course';

import ElearningCourseItem from './elearning-course-item';

// ----------------------------------------------------------------------

type Props = {
  courses: ICourseProps[];
};

export default function ElearningCourseListSimilar({ courses }: Props) {
  const mdUp = useResponsive('up', 'md');



  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Cursos Similares</Typography>
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {courses.map((course) => (
            <ElearningCourseItem key={course.id} course={course} vertical />
          ))}
        </Box>

        {!mdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }} />
        )}
      </Container>
    </Box>
  );
}
