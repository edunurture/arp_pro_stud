
// StudentAcademicQuestionBank.jsx
import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CFormSelect,
  CButton,
} from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import { cilZoom, cilTrash } from '@coreui/icons'

const avatarStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  objectFit: 'cover',
}

const StudentAcademicQuestionBank = () => {
  const [showTable, setShowTable] = useState(false)

  const student = {
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023 - 24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786',
  }

  const questionBank = [
    {
      code: '23-2AA-11T',
      course: 'LANGUAGE – I',
      status: 'QUESTION BANK NOT UPLOADED',
      statusColor: 'text-danger',
    },
    {
      code: '23-2AA-12E',
      course: 'ENGLISH – I',
      status: 'QUESTION BANK UPLOADED',
      statusColor: 'text-success',
    },
    {
      code: '23-2AA-13A',
      course: 'CORE I – PRINCIPLES OF ACCOUNTANCY',
      status: 'QUESTION BANK UPLOADED',
      statusColor: 'text-success',
    },
    {
      code: '23-2AA-13C',
      course: 'CORE II – BUSINESS ORGANIZATION AND OFFICE MANAGEMENT',
      status: 'QUESTION BANK NOT UPLOADED',
      statusColor: 'text-danger',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>Student Question Bank</strong>
        </CCardHeader>
      </CCard>

      {/* Student Profile */}
      <CRow>
        <CCol md={7}>
          <CCard className="mb-3">
            <CCardHeader>
              <strong>Student Profile</strong>
            </CCardHeader>
            <CCardBody>
              <CTable bordered>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell
                      rowSpan={3}
                      className="text-center align-middle"
                      style={{ width: 160 }}
                    >
                      <img src={student.photo} alt="Student" style={avatarStyle} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <strong>{student.name}</strong>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>{student.info}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>{student.contact}</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* Academic Selection */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>Academic Selection Form</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="align-items-center">
            <CCol md={3}>Academic Year</CCol>
            <CCol md={3}>
              <CFormSelect size="sm">
                <option>Select</option>
                <option>2025 - 26</option>
                <option>2026 - 27</option>
              </CFormSelect>
            </CCol>

            <CCol md={3}>Choose Department</CCol>
            <CCol md={3}>
              <CFormSelect size="sm">
                <option>Select</option>
                <option>Computer Science</option>
                <option>Commerce</option>
                <option>Management</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <CButton color="success" onClick={() => setShowTable(true)}>
              Search
            </CButton>
            <CButton color="secondary">Cancel</CButton>
          </div>
        </CCardBody>
      </CCard>

      {/* Question Bank Details */}
      {showTable && (
        <CCard>
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Question Bank Details</strong>
            <div className="d-flex gap-2">
              <CButton size="sm" color="primary" className="rounded-circle">
                <CIcon icon={cilZoom} />
              </CButton>
              <CButton size="sm" color="danger" className="rounded-circle">
                <CIcon icon={cilTrash} />
              </CButton>
            </div>
          </CCardHeader>

          <CCardBody>
            <CTable bordered responsive>
              <CTableHead>
                <CTableRow
                  className="text-center"
                  style={{ backgroundColor: '#7f7f7f', color: '#fff' }}
                >
                  <CTableHeaderCell>Select</CTableHeaderCell>
                  <CTableHeaderCell>Code</CTableHeaderCell>
                  <CTableHeaderCell>Course Name</CTableHeaderCell>
                  <CTableHeaderCell>Status of Question Bank</CTableHeaderCell>
                  <CTableHeaderCell>Choose Bank ID</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {questionBank.map((row, index) => (
                  <CTableRow key={index} className="text-center">
                    <CTableDataCell>
                      <input type="radio" name="qbSelect" />
                    </CTableDataCell>
                    <CTableDataCell>{row.code}</CTableDataCell>
                    <CTableDataCell className="text-start">
                      {row.course}
                    </CTableDataCell>
                    <CTableDataCell className={row.statusColor}>
                      <strong>{row.status}</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormSelect size="sm">
                        <option></option>
                      </CFormSelect>
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

export default StudentAcademicQuestionBank
