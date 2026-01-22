
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
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react-pro'

const avatarStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  objectFit: 'cover',
}

const StudentAcademicSexualHarassment = () => {
  const student = {
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023 - 24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786',
  }

  return (
    <>
      <CCard className="mb-3">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student Sexual Harassment</strong>
          <div className="d-flex gap-2">
            <CButton size="sm" color="primary">Add New</CButton>
            <CButton size="sm" color="secondary">Edit</CButton>
            <CButton size="sm" color="info">View</CButton>
          </div>
        </CCardHeader>
      </CCard>

      <CRow>
        <CCol md={7}>
          <CCard className="mb-3">
            <CCardHeader><strong>Student Profile</strong></CCardHeader>
            <CCardBody>
              <CTable bordered>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell rowSpan={3} className="text-center align-middle" style={{ width: 160 }}>
                      <img src={student.photo} alt="Student" style={avatarStyle} />
                    </CTableDataCell>
                    <CTableDataCell><strong>{student.name}</strong></CTableDataCell>
                  </CTableRow>
                  <CTableRow><CTableDataCell>{student.info}</CTableDataCell></CTableRow>
                  <CTableRow><CTableDataCell>{student.contact}</CTableDataCell></CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CCard>
        <CCardHeader><strong>REGISTER SEXUAL HARASSMENT COMPLAINT</strong></CCardHeader>
        <CCardBody>

          <CRow>
            <CCol md={6}>
              <CRow className="mb-3 align-items-center">
                <CCol md={5}><strong>Academic Year *</strong></CCol>
                <CCol md={7}>
                  <CFormSelect size="sm">
                    <option>Select</option>
                    <option>2023-24</option>
                    <option>2022-23</option>
                  </CFormSelect>
                </CCol>
              </CRow>
            </CCol>

            <CCol md={6}>
              <CRow className="mb-3 align-items-center">
                <CCol md={5}><strong>Grievance Date</strong></CCol>
                <CCol md={7}><CFormInput size="sm" placeholder="dd/mm/yyyy" /></CCol>
              </CRow>
            </CCol>
          </CRow>

          <CRow>
            <CCol md={6}>
              <CRow className="mb-3 align-items-center">
                <CCol md={5}><strong>Description (150 Words)</strong></CCol>
                <CCol md={7}><CFormInput size="sm" /></CCol>
              </CRow>
            </CCol>

            <CCol md={6}>
              <CRow className="mb-3 align-items-center">
                <CCol md={5}><strong>Upload Document</strong></CCol>
                <CCol md={7}><CFormInput type="file" size="sm" /></CCol>
              </CRow>
            </CCol>
          </CRow>

          <CRow>
            <CCol md={6}>
              <CRow className="mb-3 align-items-center">
                <CCol md={5}><strong>Submitted To</strong></CCol>
                <CCol md={7}><CFormInput size="sm" /></CCol>
              </CRow>
            </CCol>

            <CCol md={6}>
              <CRow className="mb-3 align-items-center">
                <CCol md={5}><strong>Remarks</strong></CCol>
                <CCol md={7}><CFormInput size="sm" /></CCol>
              </CRow>
            </CCol>
          </CRow>

          <div className="d-flex justify-content-end gap-2 mt-2">
            <CButton size="sm" color="success">Submit</CButton>
            <CButton size="sm" color="primary" type="reset">Reset</CButton>
            <CButton size="sm" color="secondary">Cancel</CButton>
          </div>

        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicSexualHarassment
