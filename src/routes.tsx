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
  { path: '/lms/assignments', name: 'Assignments', element: Assignments },
  { path: '/lms/course-contents', name: 'Course Contents', element: CourseContents },
  { path: '/lms/course-materials', name: 'Course Materials', element: CourseMaterials },
  { path: '/lms/project', name: 'Project', element: Project },
  { path: '/lms/internship', name: 'Internship', element: Internship },
  { path: '/lms/training-programme', name: 'Training Programme', element: TrainingProgramme },

  // Evaluation (matches _nav.tsx paths)
  { path: '/evaluation/schedule', name: 'Exam Schedule', element: ExamSchedule },
  { path: '/evaluation/cia-marks', name: 'CIA Marks', element: CiaMarks },
  { path: '/evaluation/question-bank', name: 'Question Bank', element: QuestionBank },
]

export default routes
