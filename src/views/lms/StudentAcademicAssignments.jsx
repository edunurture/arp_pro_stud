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

const StudentAcademicAssignments = () => {
  const [category, setCategory] = useState('COURSE_NAME')
  const [showAssignments, setShowAssignments] = useState(false)

  // ✅ common student photo
  const studentPhoto =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80'

  const assignments = [
    {
      date: '01-09-2025',
      course: 'MCA101 - Programming in C',
      title: 'Array and Pointer Problems',
      lastDate: '15-09-2025',
      status: 'PENDING',
      submitted: false,
    },
    {
      date: '05-09-2025',
      course: 'MCA102 - Data Structures',
      title: 'Linked List Operations',
      lastDate: '18-09-2025',
      status: 'SUBMITTED ON 12-09-2025',
      submitted: true,
    },
    {
      date: '10-09-2025',
      course: 'MCA103 - DBMS',
      title: 'ER Diagram and Normalization',
      lastDate: '20-09-2025',
      status: 'SUBMITTED ON 15-09-2025',
      submitted: true,
    },
  ]

  return (
    <>
      <CCard className="mb-3">
        <CCardHeader>
          <strong>Student Academic Assignments</strong>
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
                    <option value="COURSE_NAME">COURSE NAME</option>
                  </CFormSelect>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <CButton size="sm" onClick={() => setShowAssignments(true)}>
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {showAssignments && (
        <CCard>
          <CCardHeader>Academic Assignments</CCardHeader>
          <CCardBody>
            <CTable bordered small className="text-center">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Select</CTableHeaderCell>
                  <CTableHeaderCell>Date | Course</CTableHeaderCell>
                  <CTableHeaderCell>Assignment Title</CTableHeaderCell>
                  <CTableHeaderCell>Last Date</CTableHeaderCell>
                  <CTableHeaderCell>Submit</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {assignments.map((a, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>
                      <input type="radio" name="assignmentSelect" />
                    </CTableDataCell>
                    <CTableDataCell>
                      {a.date} | {a.course}
                    </CTableDataCell>
                    <CTableDataCell>{a.title}</CTableDataCell>
                    <CTableDataCell>{a.lastDate}</CTableDataCell>
                    <CTableDataCell>
                      <CButton size="sm" disabled={a.submitted}>
                        Submit
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell
                      className={
                        a.submitted ? 'text-success fw-semibold' : 'text-danger fw-semibold'
                      }
                    >
                      {a.status}
                    </CTableDataCell>
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

export default StudentAcademicAssignments
