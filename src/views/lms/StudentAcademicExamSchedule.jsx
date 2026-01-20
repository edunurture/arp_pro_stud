
// StudentAcademicExamSchedule.jsx
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

const StudentAcademicExamSchedule = () => {
  const [category, setCategory] = useState('')
  const [showSchedule, setShowSchedule] = useState(false)

  // same image used across student pages
  const studentPhoto =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80'

  const examSchedule = [
    {
      code: 'MCA301',
      name: 'Advanced Programming',
      date: '12-12-2024',
      session: 'FN',
      start: '09:30 AM',
      end: '12:30 PM',
      mode: 'Offline',
      duration: '3 Hrs',
      remarks: '-',
    },
    {
      code: 'MCA302',
      name: 'Database Systems',
      date: '14-12-2024',
      session: 'AN',
      start: '01:30 PM',
      end: '04:30 PM',
      mode: 'Online',
      duration: '3 Hrs',
      remarks: '-',
    },
    {
      code: 'MCA303',
      name: 'Computer Networks',
      date: '18-12-2024',
      session: 'FN',
      start: '09:30 AM',
      end: '12:30 PM',
      mode: 'Offline',
      duration: '3 Hrs',
      remarks: '-',
    },
  ]

  return (
    <>
      {/* Header */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>Student Academic Examination Schedule</strong>
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
                  <CFormSelect
                    size="sm"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">-- Select --</option>
                    <option value="EXAM_NAME">NAME OF THE EXAM</option>
                  </CFormSelect>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <CButton
                    size="sm" color="primary"
                    onClick={() => setShowSchedule(category === 'EXAM_NAME')}
                  >
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {showSchedule && (
        <CCard>
          <CCardHeader>
            <strong>Examination Schedule</strong>
          </CCardHeader>

          <CCardBody>
            <CTable bordered striped responsive className="text-center align-middle">
              <CTableHead>
                <CTableRow style={{ backgroundColor: '#7f7f7f', color: '#fff' }}>
                  <CTableHeaderCell>Select</CTableHeaderCell>
                  <CTableHeaderCell>Code</CTableHeaderCell>
                  <CTableHeaderCell>Course Name</CTableHeaderCell>
                  <CTableHeaderCell>Date</CTableHeaderCell>
                  <CTableHeaderCell>Session</CTableHeaderCell>
                  <CTableHeaderCell>Start Time</CTableHeaderCell>
                  <CTableHeaderCell>End Time</CTableHeaderCell>
                  <CTableHeaderCell>Mode</CTableHeaderCell>
                  <CTableHeaderCell>Duration</CTableHeaderCell>
                  <CTableHeaderCell>Remarks</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {examSchedule.map((row, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>
                      <input type="radio" name="examSchedule" />
                    </CTableDataCell>
                    <CTableDataCell>{row.code}</CTableDataCell>
                    <CTableDataCell className="text-start">
                      {row.name}
                    </CTableDataCell>
                    <CTableDataCell>{row.date}</CTableDataCell>
                    <CTableDataCell>{row.session}</CTableDataCell>
                    <CTableDataCell>{row.start}</CTableDataCell>
                    <CTableDataCell>{row.end}</CTableDataCell>
                    <CTableDataCell>{row.mode}</CTableDataCell>
                    <CTableDataCell>{row.duration}</CTableDataCell>
                    <CTableDataCell>{row.remarks}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      )}
    </>
  )
}

export default StudentAcademicExamSchedule
