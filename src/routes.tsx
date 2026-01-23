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
const StudentAcademicSeminarConferences = React.lazy(() => import('./views/lms/StudentAcademicSeminarConferences'))
const StudentAcademicTraining = React.lazy(() => import('./views/lms/StudentAcademicTraining'))
const StudentAcademicCompetitiveExaminations = React.lazy(() => import('./views/lms/StudentAcademicCompetitiveExaminations'))
const StudentAcademicAwardsMedals = React.lazy(() => import('./views/lms/StudentAcademicAwardsMedals'))
const StudentAcademicPresentations = React.lazy(() => import('./views/lms/StudentAcademicPresentations'))
const StudentAcademicPublications = React.lazy(() => import('./views/lms/StudentAcademicPublications'))
const StudentAcademicMemberships = React.lazy(() => import('./views/lms/StudentAcademicMemberships'))
//GREIVANCES (converted page)
const StudentAcademicAffidavits = React.lazy(() => import('./views/lms/StudentAcademicAffidavits'))
const StudentAcademicCompliants = React.lazy(() => import('./views/lms/StudentAcademicCompliants'))
const StudentAcademicExaminationGrievances = React.lazy(() => import('./views/lms/StudentAcademicExaminationGrievances'))
const StudentAcademicSexualHarassment = React.lazy(() => import('./views/lms/StudentAcademicSexualHarassment'))
const StudentAcademicOtherGrievances = React.lazy(() => import('./views/lms/StudentAcademicOtherGrievances'))
//SCHOLARSHIPS (converted page)
const StudentAcademicAddScholarship = React.lazy(() => import('./views/lms/StudentAcademicAddScholarship'))
const StudentAcademicMOOCs = React.lazy(() => import('./views/lms/StudentAcademicMOOCs'))
const StudentAcademicAddOnCourses = React.lazy(() => import('./views/lms/StudentAcademicAddOnCourses'))
const StudentAcademicCertificateCourses = React.lazy(() => import('./views/lms/StudentAcademicCertificateCourses'))



// LMS (placeholders)
const Timetable = Placeholder('Timetable')
const Attendance = Placeholder('Attendance')
const Assignments = Placeholder('Assignments')
const CourseContents = Placeholder('CourseContents')
const CourseMaterials = Placeholder('CourseMaterials')
const Project = Placeholder('Project')
const Internship = Placeholder('Internship')
const TrainingProgramme = Placeholder('TrainingProgramme')

//  Examination (placeholders)
const ExamSchedule = Placeholder('ExamSchedule')
const CiaMarks = Placeholder('CiaMarks')
const QuestionBank = Placeholder('QuestionBank')

//  Academics (placeholders)
const SeminarConferences = Placeholder('SeminarConferences')
const Training = Placeholder('Training')
const CompetitiveExaminations = Placeholder('CompetitiveExaminations')
const AwardsMedals = Placeholder('AwardsMedals')
const Presentations = Placeholder('Presentations')
const Publications = Placeholder('Publications')
const Memberships = Placeholder('Memberships')

// Greivances (placeholders)
const Affidavits = Placeholder('Affidavits')
const Compliants = Placeholder('Compliants')
const ExaminationGrievances = Placeholder('ExaminationGrievances')
const SexualHarassment = Placeholder('SexualHarassment')
const OtherGrievances = Placeholder('OtherGrievances')

//Scholarships (placeholders)
const AddScholarship = Placeholder('AddScholarship')

//Certifications (placeholders)
const MOOCs = Placeholder('MOOCs')
const AddOnCourses = Placeholder('AddOnCourses')
const CertificateCourses = Placeholder('CertificateCourses')
const DiplomaCourses = Placeholder('DiplomaCourses')

//Extra Curricular (placeholders)
const SportsActivities = Placeholder('SportsActivities')
const CulturalActivities = Placeholder('CulturalActivities')

//Placements (placeholders)
const ViewSchedule = Placeholder('ViewSchedule')
const ViewOffers = Placeholder('ViewOffers')




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
  { path: '/academics/seminar-conferences', name: 'Seminar Conferences', element: StudentAcademicSeminarConferences },
  { path: '/academics/training', name: 'Training', element: StudentAcademicTraining },
  { path: '/academics/competitive-examinations', name: 'Competitive Examinations', element: StudentAcademicCompetitiveExaminations },
  { path: '/academics/awards-medals', name: 'Awards / Medals', element: StudentAcademicAwardsMedals },
  { path: '/academics/presentations', name: 'Presentations', element: StudentAcademicPresentations },
  { path: '/academics/publications', name: 'Publications', element: StudentAcademicPublications },
  { path: '/academics/memberships', name: 'Memberships', element: StudentAcademicMemberships },

  // Grievances (matches _nav.tsx paths)
  { path: '/grievances/affidavits', name: 'Affidavits', element: StudentAcademicAffidavits },
  { path: '/grievances/compliants', name: 'Compliants', element: StudentAcademicCompliants },
  { path: '/grievances/examination-grievances', name: 'Examination Grievances', element: StudentAcademicExaminationGrievances },
  { path: '/grievances/sexual-harassment', name: 'Sexual Harassment', element: StudentAcademicSexualHarassment },
  { path: '/grievances/other-grievances', name: 'Other Grievances', element: StudentAcademicOtherGrievances },

  //Scholarships (matches _nav.tsx paths)
   { path: '/scholarships/add', name: 'Add Scholarship', element: StudentAcademicAddScholarship },

   //Certifications (matches _nav.tsx paths)
   { path: '/certifications/moocs', name: 'MOOCs', element: StudentAcademicMOOCs },
   { path: '/certifications/add-on-courses', name: 'Add On Courses', element: StudentAcademicAddOnCourses },
   { path: '/certifications/certificate-courses', name: 'Certificate Courses', element: StudentAcademicCertificateCourses },
   { path: '/certifications/diploma-courses', name: 'Diploma Courses', element: DiplomaCourses },

   // Extra Curricular (matches _nav.tsx paths)
   { path: '/extra-curricular/sports-activities', name: 'Sports Activities', element: SportsActivities },
   { path: '/extra-curricular/cultural-activities', name: 'Cultural Activities', element: CulturalActivities },

   //Placements (matches _nav.tsx paths)
   { path: '/placements/view-schedule', name: 'View Schedule', element: ViewSchedule },
   { path: '/placements/view-offers', name: 'View Offers', element: ViewOffers},

]

export default routes
