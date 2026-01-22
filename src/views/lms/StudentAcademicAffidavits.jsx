// StudentAcademicAffidavits.jsx
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

const StudentAcademicAffidavits = () => {
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

  const affidavitList = [
    { reg: '1001', name: 'John Doe', phone: '9876543210', status: 'Affidavit Pending' },
    { reg: '1002', name: 'Jane Smith', phone: '8765432109', status: 'Affidavit Uploaded' },
    { reg: '1003', name: 'Ali Khan', phone: '7654321098', status: 'Affidavit Pending' },
    { reg: '1004', name: 'Maria Lee', phone: '6543210987', status: 'Affidavit Uploaded' },
  ]

  return (
    <>
      {/* Page Header */}
      <CCard className="mb-3">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student Affidavits</strong>
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

      {/* Document Uploads */}
      <CCard className="mb-3">
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
                  <CTableDataCell>
                    <CFormInput size="sm" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormInput type="file" size="sm" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormInput size="sm" readOnly />
                  </CTableDataCell>
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

      {/* Affidavit Status Table */}
      <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Details of Student / Parent Anti–Ragging Affidavit</strong>
          <div className="d-flex gap-2">
            <CButton size="sm" color="primary">
              <CIcon icon={cilCloudDownload} className="me-1" />
              Student Affidavit
            </CButton>
            <CButton size="sm" color="success">
              <CIcon icon={cilCloudDownload} className="me-1" />
              Parent Affidavit
            </CButton>
          </div>
        </CCardHeader>

        <CCardBody>
          <CTable bordered striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Select</CTableHeaderCell>
                <CTableHeaderCell>Reg. No.</CTableHeaderCell>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Contact Number</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {affidavitList.map((row, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>
                    <input type="radio" name="studentSelect" />
                  </CTableDataCell>
                  <CTableDataCell>{row.reg}</CTableDataCell>
                  <CTableDataCell>{row.name}</CTableDataCell>
                  <CTableDataCell>{row.phone}</CTableDataCell>
                  <CTableDataCell>{row.status}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicAffidavits
