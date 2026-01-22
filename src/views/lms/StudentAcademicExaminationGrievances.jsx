import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CButton,
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
} from '@coreui/react-pro'

const avatarStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  objectFit: 'cover',
}

const StudentAcademicExaminationGrievances = () => {
  const student = {
    photo:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    name: 'AJISH .A',
    info: '23MCA01 | MCA | 3 SEM | 2023 - 24',
    contact: 'ajisha2023@gmail.com | +91 98075 90786',
  }

  const [form, setForm] = useState({
    academicYear: '',
    description: '',
    grievanceDate: '',
    submittedTo: '',
    remarks: '',
    file: null,
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <CCard className="mb-3">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>Student Examination Grievances</strong>
          <div className="d-flex gap-2">
            <CButton size="sm" color="primary">Add New</CButton>
            <CButton size="sm" color="secondary">Edit</CButton>
            <CButton size="sm" color="info">View</CButton>
          </div>
        </CCardHeader>
      </CCard>

      {/* ================= STUDENT PROFILE ================= */}
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

      {/* ================= FORM ================= */}
      <CCard>
        <CCardHeader>
          <strong>APPLY EXAMINATION GRIEVANCES</strong>
        </CCardHeader>

        <CCardBody>
          <CForm>

            {/* ROW 1 */}
            <CRow>
              <CCol md={6}>
                <CRow className="mb-3 align-items-center">
                  <CCol md={5}><strong>Academic Year *</strong></CCol>
                  <CCol md={7}>
                    <CFormSelect
                      size="sm"
                      name="academicYear"
                      value={form.academicYear}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>2023-24</option>
                      <option>2022-23</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
              </CCol>

              <CCol md={6}>
                <CRow className="mb-3 align-items-center">
                  <CCol md={5}><strong>Grievance Date</strong></CCol>
                  <CCol md={7}>
                    <CFormInput
                      size="sm"
                      placeholder="dd/mm/yyyy"
                      name="grievanceDate"
                      value={form.grievanceDate}
                      onChange={handleChange}
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>

            {/* ROW 2 */}
            <CRow>
              <CCol md={6}>
                <CRow className="mb-3 align-items-center">
                  <CCol md={5}><strong>Write Description (150 Words)</strong></CCol>
                  <CCol md={7}>
                    <CFormInput
                      size="sm"
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                    />
                  </CCol>
                </CRow>
              </CCol>

              <CCol md={6}>
                <CRow className="mb-3 align-items-center">
                  <CCol md={5}><strong>Upload Grievances</strong></CCol>
                  <CCol md={7}>
                    <CFormInput
                      type="file"
                      size="sm"
                      onChange={(e) =>
                        setForm({ ...form, file: e.target.files[0] })
                      }
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>

            {/* ROW 3 */}
            <CRow>
              <CCol md={6}>
                <CRow className="mb-3 align-items-center">
                  <CCol md={5}><strong>Submitted To</strong></CCol>
                  <CCol md={7}>
                    <CFormInput
                      size="sm"
                      name="submittedTo"
                      value={form.submittedTo}
                      onChange={handleChange}
                    />
                  </CCol>
                </CRow>
              </CCol>

              <CCol md={6}>
                <CRow className="mb-3 align-items-center">
                  <CCol md={5}><strong>Remarks (If Any)</strong></CCol>
                  <CCol md={7}>
                    <CFormInput
                      size="sm"
                      name="remarks"
                      value={form.remarks}
                      onChange={handleChange}
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>

            {/* ACTION BUTTONS */}
            <div className="d-flex justify-content-end gap-2 mt-2">
              <CButton color="success">Submit</CButton>
              <CButton color="primary">Reset</CButton>
              <CButton color="secondary">Cancel</CButton>
            </div>

          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentAcademicExaminationGrievances
