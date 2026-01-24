
// StudentAcademicCulturalActivities.jsx
import React, { useState } from 'react'
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
  CTableHead,
  CTableHeaderCell,
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import { cilZoom, cilCloudDownload } from '@coreui/icons'

const avatarStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  objectFit: 'cover',
}

const StudentAcademicCulturalActivities = () => {
  const student = {
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023 - 24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786',
  }

  const [documents, setDocuments] = useState([{ id: 1 }])

  const addRow = () => {
    setDocuments([...documents, { id: Date.now() }])
  }

  const removeRow = (id) => {
    if (documents.length === 1) return
    setDocuments(documents.filter((r) => r.id !== id))
  }

  return (
    <>
      {/* Page Header */}
      <CCard className="mb-3">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student Cultural Activities</strong>
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

      {/* Cultural Activities Form */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>ADD EXTRA CURRICULAR DETAILS – CULTURAL ACTIVITIES</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <CCol md={3}>Academic Year *</CCol>
            <CCol md={3}>
              <CFormSelect size="sm">
                <option>Select</option>
                <option>2023-24</option>
                <option>2022-23</option>
              </CFormSelect>
            </CCol>
            <CCol md={3}>Name of the Cultural</CCol>
            <CCol md={3}><CFormInput size="sm" /></CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol md={3}>From Date</CCol>
            <CCol md={3}><CFormInput type="date" size="sm" /></CCol>
            <CCol md={3}>To Date</CCol>
            <CCol md={3}><CFormInput type="date" size="sm" /></CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol md={3}>Cultural Event</CCol>
            <CCol md={3}><CFormInput size="sm" /></CCol>
            <CCol md={3}>Certificate Type</CCol>
            <CCol md={3}>
              <CFormSelect size="sm">
                <option>Participated / Won</option>
                <option>Won</option>
                <option>Lose</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol md={3}>Secured Place</CCol>
            <CCol md={3}><CFormInput size="sm" /></CCol>
            <CCol md={3}>Team / Individual</CCol>
            <CCol md={3}>
              <CFormSelect size="sm">
                <option>Team</option>
                <option>Individual</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol md={3}>Place</CCol>
            <CCol md={3}><CFormInput size="sm" /></CCol>
            <CCol md={3}>Venue</CCol>
            <CCol md={3}><CFormInput size="sm" /></CCol>
          </CRow>

          <CRow>
            <CCol md={3}>Level</CCol>
            <CCol md={3}>
              <CFormSelect size="sm">
                <option>Select</option>
                <option>National</option>
                <option>International</option>
              </CFormSelect>
            </CCol>
            <CCol md={3}>Organized By</CCol>
            <CCol md={3}><CFormInput size="sm" /></CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* Document Uploads */}
      <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Document Uploads</strong>
          <div className="d-flex gap-2">
            <CButton size="sm" color="info" className="rounded-circle">
              <CIcon icon={cilZoom} />
            </CButton>
            <CButton size="sm" color="success" className="rounded-circle">
              <CIcon icon={cilCloudDownload} />
            </CButton>
          </div>
        </CCardHeader>

        <CCardBody>
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Select</CTableHeaderCell>
                <CTableHeaderCell>Document Category</CTableHeaderCell>
                <CTableHeaderCell>Upload Document</CTableHeaderCell>
                <CTableHeaderCell>File Log</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {documents.map((row, index) => (
                <CTableRow key={row.id}>
                  <CTableDataCell className="text-center">
                    <input type="radio" name="docSelect" />
                  </CTableDataCell>
                  <CTableDataCell><CFormInput size="sm" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="file" size="sm" /></CTableDataCell>
                  <CTableDataCell><CFormInput size="sm" readOnly /></CTableDataCell>
                  <CTableDataCell>
                    {index === 0 ? (
                      <CButton size="sm" color="success" onClick={addRow}>+</CButton>
                    ) : (
                      <CButton size="sm" color="danger" onClick={() => removeRow(row.id)}>-</CButton>
                    )}
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <CButton color="primary">Save</CButton>
            <CButton color="secondary">Cancel</CButton>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicCulturalActivities
