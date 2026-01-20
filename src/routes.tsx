import React, { FC, ReactNode } from 'react'
import { Translation } from 'react-i18next'

export type Route = {
  element?: FC
  exact?: boolean
  name?: ReactNode
  path?: string
}

// Helper to generate placeholder components
const Placeholder = (name: string): FC => () => (
  <div style={{ padding: '2rem', fontSize: '18px', fontWeight: 600 }}>
    {name} component loaded successfully
  </div>
)

// Dashboard
const Dashboard = Placeholder('Dashboard')

// My Profile
const MyProfile = React.lazy(() => import('./views/myprofile/MyProfile'))

// LMS (converted page)
const StudentAcademicCalendar = React.lazy(() => import('./views/lms/StudentAcademicCalendar'))
const StudentAcademicTimetable = React.lazy(() => import('./views/lms/StudentAcademicTimetable'))
const StudentAcademicAttendance = React.lazy(() => import('./views/lms/StudentAcademicAttendance'))
const StudentAcademicAssignments = React.lazy(() => import('./views/lms/StudentAcademicAssignments'))
const StudentAcademicCourseContents = React.lazy(() => import('./views/lms/StudentAcademicCourseContents'))
const StudentAcademicCourseMaterials = React.lazy(() => import('./views/lms/StudentAcademicCourseMaterials'))
const StudentAcademicProject = React.lazy(() => import('./views/lms/StudentAcademicProject'))
const StudentAcademicInternship = React.lazy(() => import('./views/lms/StudentAcademicInternship'))
const StudentAcademicTrainingProgramme = React.lazy(() => import('./views/lms/StudentAcademicTrainingProgramme'))
// EXAMINATION (converted page)
const StudentAcademicExamSchedule = React.lazy(() => import('./views/lms/StudentAcademicExamSchedule'))
const StudentAcademicCiaMarks = React.lazy(() => import('./views/lms/StudentAcademicCiaMarks'))
const StudentAcademicQuestionBank = React.lazy(() => import('./views/lms/StudentAcademicQuestionBank'))
// ACADEMICS (converted page)
const StudentAcademicsSeminarConferences = React.lazy(() => import('./views/lms/StudentAcademicsSeminarConferences'))









// LMS (placeholders)
const Timetable = Placeholder('Timetable')
const Attendance = Placeholder('Attendance')
const Assignments = Placeholder('Assignments')
const CourseContents = Placeholder('CourseContents')
const CourseMaterials = Placeholder('CourseMaterials')
const Project = Placeholder('Project')
const Internship = Placeholder('Internship')
const TrainingProgramme = Placeholder('TrainingProgramme')

// Evaluation / Examination (placeholders)
const ExamSchedule = Placeholder('ExamSchedule')
const CiaMarks = Placeholder('CiaMarks')
const QuestionBank = Placeholder('QuestionBank')

// Evaluation / Academics (placeholders)
const SeminarConferences = Placeholder('SeminarConferences')
const Training = Placeholder('Training')
const CompetitiveExams = Placeholder('CompetitiveExams')

const routes: Route[] = [
  { path: '/', exact: true, name: <Translation>{(t) => t('home')}</Translation> },
  {
    path: '/dashboard',
    name: <Translation>{(t) => t('dashboard')}</Translation>,
    element: Dashboard,
  },


  // My Profile
  {
    path: '/profile/my-profile', name: 'My Profile', element: MyProfile,
  },

  // LMS
  {
    path: '/lms/student-academic-calendar',
    name: 'Student Academic Calender',
    element: StudentAcademicCalendar,
  },

  // Optional alias (keeps older links working, if any)
  {
    path: '/lms/calendar',
    name: 'Calendar',
    element: StudentAcademicCalendar,
  },

  { path: '/lms/timetable', name: 'Timetable', element: StudentAcademicTimetable },
  { path: '/lms/attendance', name: 'Attendance', element: StudentAcademicAttendance },
  { path: '/lms/assignments', name: 'Assignments', element: StudentAcademicAssignments },
  { path: '/lms/course-contents', name: 'Course Contents', element: StudentAcademicCourseContents },
  { path: '/lms/course-materials', name: 'Course Materials', element: StudentAcademicCourseMaterials },
  { path: '/lms/project', name: 'Project', element: StudentAcademicProject },
  { path: '/lms/internship', name: 'Internship', element: StudentAcademicInternship },
  { path: '/lms/training-programme', name: 'Training Programme', element: StudentAcademicTrainingProgramme },

  // Evaluation (matches _nav.tsx paths)
  { path: '/evaluation/schedule', name: 'Exam Schedule', element: StudentAcademicExamSchedule },
  { path: '/evaluation/cia-marks', name: 'CIA Marks', element: StudentAcademicCiaMarks },
  { path: '/evaluation/question-bank', name: 'Question Bank', element: StudentAcademicQuestionBank },

  // Evaluation Academics (matches _nav.tsx paths)
  { path: '/academics/seminar-conferences', name: 'Seminar Conferences', element: StudentAcademicsSeminarConferences },
  { path: '/academics/training', name: 'Training', element: Training },
  { path: '/academics/competitive-examinations', name: 'Competitive Exams', element: CompetitiveExams },
]

export default routes
