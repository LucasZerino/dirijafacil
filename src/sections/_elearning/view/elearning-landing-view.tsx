'use client';

import {
  _courses,
  _members,
} from 'src/_mock';

import HomeFAQs from 'src/sections/_home/home-faqs';

import ElearningTeam from '../team/elearning-team';
import ElearningLandingHero from '../landing/elearning-landing-hero';
import ElearningLandingIntroduce from '../landing/elearning-landing-introduce';
import ElearningLandingFeaturedCourses from '../landing/elearning-landing-featured-courses';

// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <ElearningLandingHero />

      <ElearningLandingIntroduce />

      <ElearningLandingFeaturedCourses 
        courses={_courses.filter((course): course is NonNullable<typeof course> => course !== null)} 
      />
      <ElearningTeam members={_members.slice(0, 4)} />

      <HomeFAQs />
    </>
  );
}
