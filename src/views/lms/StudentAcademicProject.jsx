
// StudentAcademicProject.jsx
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
  CButton
} from '@coreui/react-pro'

const avatarStyle = {
  width: 80,
  height: 80,
  borderRadius: '50%',
  objectFit: 'cover'
}

const StudentAcademicProject = () => {

  const student = {
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023–24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786'
  }

  const [documents, setDocuments] = useState([
    { id: 1 }
  ])

  const addRow = () => {
    setDocuments([...documents, { id: Date.now() }])
  }

  const removeRow = (id) => {
    setDocuments(documents.filter(row => row.id !== id))
  }

  return (
    <>
      {/* Student Profile */}
      <CRow>
        <CCol md={6}>
          <CCard className="mb-3">
            <CCardBody>
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell rowSpan={3} className="text-center align-middle" style={{ width: 120 }}>
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

      {/* Add Project Details */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>ADD PROJECT DETAILS</strong>
        </CCardHeader>
        <CCardBody>
          <CTable borderless>
            <CTableBody>

              <CTableRow>
                <CTableDataCell>Academic Year *</CTableDataCell>
                <CTableDataCell>
                  <CFormSelect size="sm">
                    <option>-- Select Academic Year --</option>
                  </CFormSelect>
                </CTableDataCell>

                <CTableDataCell>Course Code</CTableDataCell>
                <CTableDataCell>
                  <CFormSelect size="sm">
                    <option>-- Select Course Code --</option>
                  </CFormSelect>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>Organization Name</CTableDataCell>
                <CTableDataCell><CFormInput size="sm" /></CTableDataCell>

                <CTableDataCell>Address</CTableDataCell>
                <CTableDataCell><CFormInput size="sm" /></CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>Website</CTableDataCell>
                <CTableDataCell><CFormInput size="sm" /></CTableDataCell>

                <CTableDataCell>Authority Name</CTableDataCell>
                <CTableDataCell><CFormInput size="sm" /></CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>Mobile</CTableDataCell>
                <CTableDataCell><CFormInput size="sm" /></CTableDataCell>

                <CTableDataCell>Email</CTableDataCell>
                <CTableDataCell><CFormInput size="sm" type="email" /></CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>Project Title</CTableDataCell>
                <CTableDataCell><CFormInput size="sm" /></CTableDataCell>

                <CTableDataCell>Project Duration</CTableDataCell>
                <CTableDataCell>
                  <CRow>
                    <CCol>
                      <CFormSelect size="sm"><option>From</option></CFormSelect>
                    </CCol>
                    <CCol>
                      <CFormSelect size="sm"><option>To</option></CFormSelect>
                    </CCol>
                  </CRow>
                </CTableDataCell>
              </CTableRow>

            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Document Uploads */}
      <CCard>
        <CCardHeader>
          <strong>Document Uploads</strong>
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
                    <CFormInput />
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormInput type="file" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormInput readOnly />
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

          <div className="d-flex justify-content-end mt-3 gap-2">
            <CButton color="primary">Save</CButton>
            <CButton color="secondary">Cancel</CButton>
          </div>

        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicProject
