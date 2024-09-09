import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Marketing',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
    ],
  },
  {
    order: '6',
    subheader: 'Travel',
    cover: '/assets/images/menu/menu_travel.jpg',
    items: [
   ],
  },
  {
    order: '2',
    subheader: 'Career',
    cover: '/assets/images/menu/menu_career.jpg',
    items: [
    ],
  },
  {
    order: '5',
    subheader: 'E-learning',
    cover: '/assets/images/menu/menu_elearning.jpg',
    items: [
      { title: 'Landing', path: paths.eLearning.root },
      { title: 'Courses', path: paths.eLearning.courses },
      { title: 'Course', path: paths.eLearning.course },
      { title: 'Blog Posts', path: paths.eLearning.posts },
      { title: 'Blog Post', path: paths.eLearning.post },
      { title: 'About', path: paths.eLearning.about },
      { title: 'Contact', path: paths.eLearning.contact },
    ],
  },
  {
    isNew: true,
    order: '3',
    subheader: 'E-commerce',
    cover: '/assets/images/menu/menu_ecommerce.jpg',

  },
  {
    order: '4',
    subheader: 'Common',
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Sobre', path: '#sobre' },
  { title: 'Cursos', path: '#cursos' },
  { title: 'Equipe', path: '#equipe' },
  { title: 'FAQ', path: '#faq' },
];
