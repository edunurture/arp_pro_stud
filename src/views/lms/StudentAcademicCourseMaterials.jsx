
// StudentAcademicCourseContents.jsx
import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CFormSelect,
} from '@coreui/react-pro'

const avatarStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  objectFit: 'cover',
}

const StudentAcademicCourseContents = () => {
  const [showMaterial, setShowMaterial] = useState(false)

  const student = {
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023 - 24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
  }

  const materials = [
    {
      title: 'Module 1 - Introduction to Computing',
      category: 'PDF',
      reference: 'Text Book – Ref A',
    },
    {
      title: 'Module 2 - Programming Fundamentals',
      category: 'DOCX',
      reference: 'Lecture Notes – Ref B',
    },
    {
      title: 'Module 3 - Networking Basics',
      category: 'PPT',
      reference: 'Slides – Ref C',
    },
  ]

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Student Profile</strong>
        </CCardHeader>
        <CCardBody>
          <CTable bordered responsive alignMiddle>
            <CTableBody>
              <CTableRow>
                <CTableDataCell rowSpan={3} className="text-center align-middle" style={{ width: 160 }}>
                  <img src={student.photo} alt="Student" style={avatarStyle} />
                </CTableDataCell>
                <CTableDataCell className="fw-bold">{student.name}</CTableDataCell>
                <CTableDataCell colSpan={5}></CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>{student.info}</CTableDataCell>
                <CTableDataCell colSpan={5}></CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>{student.contact}</CTableDataCell>
                <CTableDataCell className="text-center">Choose Profile Category</CTableDataCell>
                <CTableDataCell colSpan={2}>
                  <CFormSelect size="sm">
                    <option>COURSE NAME</option>
                  </CFormSelect>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton size="sm" color="primary" onClick={() => setShowMaterial(true)}>
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {showMaterial && (
        <CCard>
          <CCardHeader className="d-flex justify-content-between">
            <strong>Course Material</strong>
            <div>
              <CButton color="primary" size="sm" className="me-2">
                View
              </CButton>
              <CButton color="success" size="sm">
                Download
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTable bordered striped responsive className="text-center align-middle">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Select</CTableHeaderCell>
                  <CTableHeaderCell>Material Heading</CTableHeaderCell>
                  <CTableHeaderCell>Resource Category</CTableHeaderCell>
                  <CTableHeaderCell>References</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {materials.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>
                      <input type="radio" name="material" />
                    </CTableDataCell>
                    <CTableDataCell className="text-start">{item.title}</CTableDataCell>
                    <CTableDataCell>{item.category}</CTableDataCell>
                    <CTableDataCell>{item.reference}</CTableDataCell>
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

export default StudentAcademicCourseContents
