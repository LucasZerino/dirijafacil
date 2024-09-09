'use client';

import { useEffect } from 'react';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _courses } from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';

import { ICourseProps } from 'src/types/course';

import ElearningCourseDetailsHero from '../details/elearning-course-details-hero'; // Ajuste o caminho conforme necessário

// ----------------------------------------------------------------------

const _mockCourse: ICourseProps | null = _courses[0] || null;

export default function ElearningCourseView() {
  const mdUp = useResponsive('up', 'md');

  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      {_mockCourse ? (
        <ElearningCourseDetailsHero course={_mockCourse} />
      ) : (
        <div>Course not found</div>
      )}
    </>
  );
}
