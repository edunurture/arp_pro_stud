
// StudentAcademicCiaMarks.jsx
import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CFormSelect,
  CButton,
} from '@coreui/react-pro'

const StudentAcademicCiaMarks = () => {
  const [showMarks, setShowMarks] = useState(false)
  const [category, setCategory] = useState('')

  const studentPhoto =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80'

  const ciaMarks = [
    {
      code: 'CS501',
      course: 'Data Structures',
      date: '10-12-2024',
      marks: 92,
      result: 'PASS',
      remarks: 'GOOD',
    },
    {
      code: 'CS502',
      course: 'Operating Systems',
      date: '15-12-2024',
      marks: 88,
      result: 'PASS',
      remarks: 'VERY GOOD',
    },
    {
      code: 'CS503',
      course: 'Networking',
      date: '20-12-2024',
      marks: 76,
      result: 'PASS',
      remarks: 'AVERAGE',
    },
  ]

  return (
    <>
      {/* Header */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>Student CIA Marks</strong>
        </CCardHeader>
      </CCard>

      {/* Student Profile */}
      <CCard className="mb-3">
        <CCardBody>
          <CTable bordered className="align-middle text-center">
            <CTableBody>
              <CTableRow>
                <CTableDataCell rowSpan={3} style={{ width: 150 }}>
                  <img
                    src={studentPhoto}
                    alt="Student"
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #0d6efd',
                    }}
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <strong>AJISH .A</strong>
                </CTableDataCell>
                <CTableDataCell colSpan={4}></CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell className="text-start">
                  23MCA01 | MCA | 3 SEM | 2023 – 24
                </CTableDataCell>
                <CTableDataCell colSpan={4}></CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell className="text-start">
                  ajisha2023@gmail.com | +91 98075 90786
                </CTableDataCell>
                <CTableDataCell>
                  <strong>Choose Profile Category</strong>
                </CTableDataCell>
                <CTableDataCell colSpan={2}>
                  <CFormSelect
                    size="sm"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">-- Select --</option>
                    <option value="CIA">NAME OF THE EXAM</option>
                  </CFormSelect>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton
                    size="sm"
                    color="primary"
                    onClick={() => setShowMarks(category === 'CIA')}
                  >
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* CIA Marks Table */}
      {showMarks && (
        <CCard>
          <CCardHeader>
            <strong>Examination Schedule</strong>
          </CCardHeader>
          <CCardBody>
            <CTable bordered striped responsive className="text-center">
              <CTableHead>
                <CTableRow style={{ backgroundColor: '#7f7f7f', color: '#fff' }}>
                  <CTableHeaderCell>Select</CTableHeaderCell>
                  <CTableHeaderCell>Code</CTableHeaderCell>
                  <CTableHeaderCell>Course Name</CTableHeaderCell>
                  <CTableHeaderCell>Date of Examination</CTableHeaderCell>
                  <CTableHeaderCell>Marks</CTableHeaderCell>
                  <CTableHeaderCell>Result</CTableHeaderCell>
                  <CTableHeaderCell>Remarks</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {ciaMarks.map((row, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>
                      <input type="radio" name="ciaSelect" />
                    </CTableDataCell>
                    <CTableDataCell>{row.code}</CTableDataCell>
                    <CTableDataCell className="text-start">
                      {row.course}
                    </CTableDataCell>
                    <CTableDataCell>{row.date}</CTableDataCell>
                    <CTableDataCell>{row.marks}</CTableDataCell>
                    <CTableDataCell>{row.result}</CTableDataCell>
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

export default StudentAcademicCiaMarks
