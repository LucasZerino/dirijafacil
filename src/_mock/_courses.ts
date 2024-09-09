import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const TEACHERS = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
  totalCourses: 48,
  totalReviews: 40,
  totalStudents: 50,
  ratingNumber: _mock.number.rating(index),
}));

const LESSONS = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  duration: 60 - index,
  title: `Lesson ${index + 1}`,
  videoPath: _mock.video(index),
  description: _mock.sentence(index),
  unLocked: [0, 1, 2].includes(index),
}));

export const _courses = [...Array(12)].map((_, index) => {
  const languages = ['Português'];

  const skills = _tags.slice(0, 5);

  const level =
    (index % 2 && 'Intermediário') ||
    (index % 4 && 'Avançado') ||
    (index % 5 && 'All Levels') ||
    'Iniciante';

  const learnList = [
    'Categorias A e B',
    'Adição de Categoria A',
    'Adição de Categoria B',
    'Categoria A',
    'Categoria B'
  ];

  const course = {
    id: _mock.id(index),
    level,
    skills,
    languages,
    learnList,
    resources: 12,
    totalHours: 100,
    lessons: LESSONS,
    totalQuizzes: 100,
    totalReviews: 40,
    teachers: TEACHERS,
    totalStudents: 50,
    createdAt: new Date(),
    category: _tags[index],
    slug: _mock.courseTitle(index),
    bestSeller: index === 2 || false,
    coverUrl: _mock.image.course(index),
    ratingNumber: _mock.number.rating(index),
    description: _mock.description(index),
    price: (index % 2 && 159.99) || 269.99,
    priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };

  if (index === 0) {
    course.price = 1500;
    course.priceSale = 0;
    course.totalHours = 85;
    course.description = 'Curso completo para obtenção da 1ª Habilitação nas categorias A e B.';
    course.level = 'Iniciante';
    course.ratingNumber = 5.0;
  } else if (index === 1) {
    course.price = 800;
    course.priceSale = 0;
    course.totalHours = 65;
    course.ratingNumber = 5.0;
    course.description = 'Curso para obtenção da 1ª Habilitação na categoria A (motos).';
    course.level = 'Iniciante';
  } else if (index === 2) {
    course.price = 1000;
    course.priceSale = 0;
    course.totalHours = 65;
    course.description = 'Curso para obtenção da 1ª Habilitação na categoria B (carros).';
    course.level = 'Iniciante';
    course.ratingNumber = 5.0;
  } else if (index === 3) {
    course.price = 600;
    course.priceSale = 0;
    course.totalHours = 15;
    course.description = 'Curso para adição da categoria A à sua habilitação existente.';
    course.level = 'Intermediário';
    course.ratingNumber = 4.5;
  }
  else if (index === 4) {
    course.price = 900;
    course.priceSale = 0;
    course.totalHours = 15;
    course.description = 'Curso para adição da categoria B à sua habilitação existente.';
    course.level = 'Intermediário';
    course.ratingNumber = 4.5;
  }

  return course.slug ? course : null;
}).filter(Boolean);

export const _coursesByCategories = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  name: _tags[index],
  totalStudents: _mock.number.nativeM(index),
}));
