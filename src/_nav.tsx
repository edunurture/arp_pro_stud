import React, { ElementType, JSX } from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilGrid,
  cilLayers,
  cilMap,
  cilNotes,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  badge?: Badge
  component: string | ElementType
  href?: string
  icon?: string | JSX.Element
  items?: NavItem[]
  name: string | JSX.Element
  to?: string
}

/**
 * Converted from the legacy ARP student sidebar HTML (sidebar.html).
 * - Titles and menu text are kept as-is.
 * - `to` paths are React routes (NOT the legacy .html names).
 * - Add routes in src/routes.tsx ONLY when the actual page file exists (Vite-safe).
 */
const _nav: NavItem[] = [
  // Home
  {
    component: CNavTitle,
    name: 'Home',
  },
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  // Profile
  {
    component: CNavTitle,
    name: 'ARP Navigation',
  },
  {
    component: CNavGroup,
    name: 'MY PROFILE',
    to: '/profile',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Profile',
        to: '/profile/my-profile',
      },
    ],
  },

  // Learning Management System
  {
    component: CNavGroup,
    name: 'LMS',
    to: '/lms',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    items: [
      // Converted page
      { component: CNavItem, name: 'Calender', to: '/lms/student-academic-calendar' },

      // Remaining placeholders (convert one-by-one later)
      { component: CNavItem, name: 'Timetable', to: '/lms/timetable' },
      { component: CNavItem, name: 'Attendance', to: '/lms/attendance' },
      { component: CNavItem, name: 'Assignments', to: '/lms/assignments' },
      { component: CNavItem, name: 'Course Contents', to: '/lms/course-contents' },
      { component: CNavItem, name: 'Course Materials', to: '/lms/course-materials' },
      { component: CNavItem, name: 'Project', to: '/lms/project' },
      { component: CNavItem, name: 'Internship', to: '/lms/internship' },
      { component: CNavItem, name: 'Training Programme', to: '/lms/training-programme' },
    ],
  },

  // Evaluation / Examination
  {
    component: CNavGroup,
    name: 'EXAMINATION',
    to: '/evaluation',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Schedule', to: '/evaluation/schedule' },
      { component: CNavItem, name: 'CIA Marks', to: '/evaluation/cia-marks' },
      { component: CNavItem, name: 'Question Bank', to: '/evaluation/question-bank' },
    ],
  },

  // Academics
  {
    component: CNavGroup,
    name: 'ACADEMICS',
    to: '/academics',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Seminar/Conferences', to: '/academics/seminar-conferences' },
      { component: CNavItem, name: 'Training', to: '/academics/training' },
      { component: CNavItem, name: 'Competitive Examinations', to: '/academics/competitive-examinations' },
      { component: CNavItem, name: 'Awards / Medals', to: '/academics/awards-medals' },
      { component: CNavItem, name: 'Presentations', to: '/academics/presentations' },
      { component: CNavItem, name: 'Publications', to: '/academics/publications' },
      { component: CNavItem, name: 'Memberships', to: '/academics/memberships' },
    ],
  },

  // Grievances
  {
    component: CNavGroup,
    name: 'GRIEVANCES',
    to: '/grievances',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Affidavits', to: '/grievances/affidavits' },
      // Kept the legacy spelling from the HTML: "Compliants"
      { component: CNavItem, name: 'Compliants', to: '/grievances/compliants' },
      { component: CNavItem, name: 'Examination Grievances', to: '/grievances/examination-grievances' },
      { component: CNavItem, name: 'Sexual Harassment', to: '/grievances/sexual-harassment' },
      { component: CNavItem, name: 'Other Grievances', to: '/grievances/other-grievances' },
    ],
  },

  // Scholarships
  {
    component: CNavGroup,
    name: 'SCHOLARSHIPS',
    to: '/scholarships',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [{ component: CNavItem, name: 'Add Scholarship', to: '/scholarships/add' }],
  },

  // Certifications
  {
    component: CNavGroup,
    name: 'CERTIFICATIONS',
    to: '/certifications',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'MOOCs', to: '/certifications/moocs' },
      { component: CNavItem, name: 'Add On Courses', to: '/certifications/add-on-courses' },
      { component: CNavItem, name: 'Certificate Courses', to: '/certifications/certificate-courses' },
      { component: CNavItem, name: 'Diploma Courses', to: '/certifications/diploma-courses' },
    ],
  },

  // Extra Curricular
  {
    component: CNavGroup,
    name: 'EXTRA CURRICULAR',
    to: '/extra-curricular',
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Sports Activities', to: '/extra-curricular/sports-activities' },
      { component: CNavItem, name: 'Cultural Activities', to: '/extra-curricular/cultural-activities' },
    ],
  },

  // Placements
  {
    component: CNavGroup,
    name: 'PLACEMENTS',
    to: '/placements',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'View Schedule', to: '/placements/view-schedule' },
      { component: CNavItem, name: 'View Offers', to: '/placements/view-offers' },
    ],
  },
]

export default _nav
