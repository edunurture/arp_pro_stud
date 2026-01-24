
// StudentAcademicViewSchedule.jsx
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

const avatarStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  objectFit: 'cover',
}

const StudentAcademicViewSchedule = () => {
  const student = {
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023 - 24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786',
  }

  const schedules = [
    {
      id: 1,
      month: 'Jan 2024',
      from: '2024-01-10',
      to: '2024-01-12',
      activity: 'Aptitude & Reasoning Workshop',
      organized: 'Career Guidance Cell',
      organization: 'ABC Training Institute',
    },
    {
      id: 2,
      month: 'Feb 2024',
      from: '2024-02-05',
      to: '2024-02-05',
      activity: 'Mock Interview Session',
      organized: 'Placement Cell',
      organization: 'XYZ HR Solutions',
    },
    {
      id: 3,
      month: 'Mar 2024',
      from: '2024-03-18',
      to: '2024-03-20',
      activity: 'Campus Drive Preparation Bootcamp',
      organized: 'Industry Collaboration Cell',
      organization: 'TechNova Pvt. Ltd.',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <CCard className="mb-3">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student View Schedule</strong>
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
                    <CTableDataCell rowSpan={3} className="text-center align-middle" style={{ width: 160 }}>
                      <img src={student.photo} alt="Student" style={avatarStyle} />
                    </CTableDataCell>
                    <CTableDataCell><strong>{student.name}</strong></CTableDataCell>
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

      {/* Placement Schedule */}
      <CCard>
        <CCardHeader>
          <strong>Placement Schedule</strong>
        </CCardHeader>
        <CCardBody>
          <CTable bordered responsive>
            <thead>
              <tr>
                <th>Select</th>
                <th>Month & Year</th>
                <th>Date From</th>
                <th>To Date</th>
                <th>Placement Activity</th>
                <th>Organized Through</th>
                <th>Organization Name</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((row) => (
                <tr key={row.id}>
                  <td className="text-center">
                    <input type="radio" name="scheduleSelect" />
                  </td>
                  <td>{row.month}</td>
                  <td>{row.from}</td>
                  <td>{row.to}</td>
                  <td>{row.activity}</td>
                  <td>{row.organized}</td>
                  <td>{row.organization}</td>
                </tr>
              ))}
            </tbody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicViewSchedule
