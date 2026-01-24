
// StudentAcademicViewOffers.jsx
import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CButton,
} from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'

const avatarStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  objectFit: 'cover',
}

const StudentAcademicViewOffers = () => {
  const student = {
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023 - 24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786',
  }

  const offers = [
    {
      id: 1,
      company: 'TechNova Pvt. Ltd.',
      position: 'Software Engineer (Graduate Trainee)',
      ctc: '₹6.5 LPA',
    },
    {
      id: 2,
      company: 'InnoWare Solutions',
      position: 'Data Analyst',
      ctc: '₹5.2 LPA',
    },
    {
      id: 3,
      company: 'Apex Digital Services',
      position: 'Junior Full Stack Developer',
      ctc: '₹7.8 LPA',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <CCard className="mb-3">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student View Offers</strong>
          <div className="d-flex gap-2">
            <CButton size="sm" color="primary">Add New</CButton>
            <CButton size="sm" color="secondary">Edit</CButton>
            <CButton size="sm" color="info">View</CButton>
          </div>
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

      {/* Placement Offers */}
      <CCard>
        <CCardHeader>
          <strong>Placement Offers / Appointment Offers</strong>
        </CCardHeader>
        <CCardBody>
          <CTable bordered responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Company</th>
                <th>Offer Position</th>
                <th>CTC Per Year</th>
                <th>Download Offer Letter</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((row) => (
                <tr key={row.id}>
                  <td className="text-center">
                    <input type="radio" name="offer_select" />
                  </td>
                  <td>{row.company}</td>
                  <td>{row.position}</td>
                  <td>{row.ctc}</td>
                  <td>
                    <CButton size="sm" color="primary">
                      <CIcon icon={cilCloudDownload} className="me-1" />
                      Download
                    </CButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicViewOffers
