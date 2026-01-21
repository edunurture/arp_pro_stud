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

const StudentAcademicPublications = () => {
  const [isAddNew, setIsAddNew] = useState(false)

  const student = {
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023 - 24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786',
  }

  const emptyDoc = {
    id: 1,
    category: '',
    file: null,
    fileName: '',
  }

  const [documents, setDocuments] = useState([emptyDoc])

  const addRow = () => {
    setDocuments([
      ...documents,
      {
        id: Date.now(),
        category: '',
        file: null,
        fileName: '',
      },
    ])
  }

  const removeRow = (id) => {
    if (documents.length === 1) return
    setDocuments(documents.filter((r) => r.id !== id))
  }

  // ✅ EXACT HTML CANCEL BEHAVIOR
  const handleCancel = () => {
    setDocuments([{ ...emptyDoc }])
  }

  return (
    <>
      {/* Header */}
      <CCard className="mb-3">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student Paper Publications</strong>
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

      {/* Publication Form */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>ADD PAPER PUBLICATIONS DETAILS</strong>
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
                <CCol md={5}>Publication Type</CCol>
                <CCol md={7}>
                  <CFormSelect size="sm" disabled={!isAddNew}>
                    <option>NATIONAL / INTERNATIONAL</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Title of Conference / Seminar</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Date of Conference</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" placeholder="dd/mm/yyyy" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Venue</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>
            </CCol>

            <CCol md={6}>
              <CRow className="mb-2">
                <CCol md={5}>Title of the Paper</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>ISSN Number</CCol>
                <CCol md={7}>
                  <CFormInput size="sm" disabled={!isAddNew} />
                </CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol md={5}>Organized By</CCol>
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
                    <input type="radio" />
                  </CTableDataCell>

                  <CTableDataCell>
                    <CFormInput disabled={!isAddNew} />
                  </CTableDataCell>

                  <CTableDataCell>
                    <CFormInput type="file" disabled={!isAddNew} />
                  </CTableDataCell>

                  <CTableDataCell>
                    <CFormInput readOnly value={row.fileName} />
                  </CTableDataCell>

                  <CTableDataCell>
                    {index === 0 ? (
                      <CButton
                        size="sm"
                        color="success"
                        disabled={!isAddNew}
                        onClick={addRow}
                      >
                        +
                      </CButton>
                    ) : (
                      <CButton
                        size="sm"
                        color="danger"
                        disabled={!isAddNew}
                        onClick={() => removeRow(row.id)}
                      >
                        −
                      </CButton>
                    )}
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <CButton color="primary" disabled={!isAddNew}>
              Save
            </CButton>
            <CButton color="secondary" onClick={handleCancel}>
              Cancel
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicPublications
