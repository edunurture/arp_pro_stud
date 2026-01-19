import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CFormSelect,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react-pro'

const StudentAcademicCourseContents = () => {
  const [category, setCategory] = useState('')
  const [showContent, setShowContent] = useState(false)
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0)
  const [selectedUnit, setSelectedUnit] = useState('UNIT I')

  // ✅ same image used across all student pages
  const studentPhoto =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80'

  const courses = [
    { code: 'MCA301', name: 'Data Structures', lecture: 3, tutorial: 1, practical: 2, chapters: 5, credit: 4 },
    { code: 'MCA302', name: 'Database Systems', lecture: 3, tutorial: 1, practical: 2, chapters: 6, credit: 4 },
    { code: 'MCA303', name: 'Web Technologies', lecture: 2, tutorial: 1, practical: 3, chapters: 6, credit: 4 },
  ]

  const courseContents = {
    'UNIT I': [
      { heading: 'INTRODUCTION', topic: 'Principles of Accounting', hours: 1 },
      { heading: 'CLASSIFICATION', topic: 'Classified Balance Sheet', hours: 1 },
      { heading: 'ORIGINAL ENTRY', topic: 'Books of Original Entry', hours: 1 },
      { heading: 'LEDGERS', topic: 'Ledgers and Trial Balance', hours: 1 },
      { heading: 'PREPARATION', topic: 'Period Adjustment', hours: 1 },
    ],
    'UNIT II': [
      { heading: 'COSTING', topic: 'Cost Accounting Basics', hours: 2 },
      { heading: 'MATERIAL', topic: 'Material Control', hours: 1 },
    ],
  }

  const totalHours = (c) => c.lecture + c.tutorial + c.practical

  return (
    <>
      <CCard className="mb-3">
        <CCardHeader>
          <strong>Student Academic Course Contents</strong>
        </CCardHeader>

        <CCardBody>
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableDataCell rowSpan={3} className="text-center" style={{ width: '12%' }}>
                  <img
                    src={studentPhoto}
                    alt="Student"
                    style={{
                      width: 110,
                      height: 110,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid #e9ecef',
                    }}
                  />
                </CTableDataCell>

                <CTableDataCell colSpan={5}>
                  <strong>AJISH A</strong>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell colSpan={5}>
                  23MCA01 | MCA | Semester 3 | 2023-2024
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>
                  ajisha2023@gmail.com | +91 98075 90786
                </CTableDataCell>

                <CTableDataCell>
                  <strong>Profile Category</strong>
                </CTableDataCell>

                <CTableDataCell colSpan={2}>
                  <CFormSelect size="sm" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">-- Select --</option>
                    <option value="COURSE_NAME">COURSE NAME</option>
                  </CFormSelect>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <CButton size="sm" onClick={() => setShowContent(category === 'COURSE_NAME')}>
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {showContent && (
        <>
          <CCard className="mb-3">
            <CCardHeader>Course Details</CCardHeader>
            <CCardBody>
              <CTable bordered small className="text-center align-middle">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Select</CTableHeaderCell>
                    <CTableHeaderCell>Course Code</CTableHeaderCell>
                    <CTableHeaderCell>Course Name</CTableHeaderCell>
                    <CTableHeaderCell>Lecture</CTableHeaderCell>
                    <CTableHeaderCell>Tutorial</CTableHeaderCell>
                    <CTableHeaderCell>Practical</CTableHeaderCell>
                    <CTableHeaderCell>Total Hours</CTableHeaderCell>
                    <CTableHeaderCell>Chapters</CTableHeaderCell>
                    <CTableHeaderCell>Credit</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  {courses.map((c, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>
                        <input
                          type="radio"
                          name="courseSelect"
                          checked={selectedCourseIndex === index}
                          onChange={() => setSelectedCourseIndex(index)}
                        />
                      </CTableDataCell>
                      <CTableDataCell>{c.code}</CTableDataCell>
                      <CTableDataCell className="text-start">{c.name}</CTableDataCell>
                      <CTableDataCell>{c.lecture}</CTableDataCell>
                      <CTableDataCell>{c.tutorial}</CTableDataCell>
                      <CTableDataCell>{c.practical}</CTableDataCell>
                      <CTableDataCell>{totalHours(c)}</CTableDataCell>
                      <CTableDataCell>{c.chapters}</CTableDataCell>
                      <CTableDataCell>{c.credit}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>

          <CCard>
            <CCardHeader>View Course Contents</CCardHeader>
            <CCardBody>
              <CTable bordered>
                <CTableBody>
                  {courseContents[selectedUnit]?.map((row, idx) => (
                    <CTableRow key={idx}>
                      <CTableDataCell>{row.heading}</CTableDataCell>
                      <CTableDataCell>{row.topic}</CTableDataCell>
                      <CTableDataCell className="text-center">{row.hours}</CTableDataCell>
                      <CTableDataCell />
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </>
      )}
    </>
  )
}

export default StudentAcademicCourseContents
