
// StudentAcademicTraining.jsx
import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
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

const StudentAcademicTraining = () => {
  const [isAddNew, setIsAddNew] = useState(false)

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
      {/* Header */}
      <CCard className="mb-3">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student Training</strong>
          <div className="d-flex gap-2">
            <CButton size="sm" color="primary" onClick={() => setIsAddNew(true)}>
              Add New
            </CButton>
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

      {/* Training Form */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>PARTICIPATION OF TRAINING PROGRAMME</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <CCol md={6}>
              <CRow className="mb-2">
                <CCol md={5}>Academic Year *</CCol>
                <CCol md={7}>
                  <CFormSelect size="sm" disabled={!isAddNew}>
                    <option>Select</option>
                    <option>2023-24</option>
                    <option>2022-23</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>From Date</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" placeholder="dd/mm/yyyy" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Organized By</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Name of Contact Person</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Email ID</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>
            </CCol>

            <CCol md={6}>
              <CRow className="mb-2">
                <CCol md={5}>Title</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>To Date</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" placeholder="dd/mm/yyyy" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Financial Contribution</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Designation</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>URL of Website</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>
            </CCol>
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
                  <CTableDataCell><CFormInput disabled={!isAddNew} /></CTableDataCell>
                  <CTableDataCell><CFormInput type="file" disabled={!isAddNew} /></CTableDataCell>
                  <CTableDataCell><CFormInput readOnly /></CTableDataCell>
                  <CTableDataCell>
                    {index === 0 ? (
                      <CButton size="sm" color="success" disabled={!isAddNew} onClick={addRow}>+</CButton>
                    ) : (
                      <CButton size="sm" color="danger" disabled={!isAddNew} onClick={() => removeRow(row.id)}>-</CButton>
                    )}
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <CButton color="primary" disabled={!isAddNew}>Save</CButton>
            <CButton color="secondary">Cancel</CButton>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicTraining
