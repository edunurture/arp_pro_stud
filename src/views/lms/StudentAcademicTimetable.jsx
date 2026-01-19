import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react-pro'

/**
 * Student Academic Timetable
 * Converted from stud_timetable.html fileciteturn9file0
 *
 * Student photo handling updated to match StudentAcademicCalendar.jsx reference fileciteturn10file0:
 * - Uses the same circular avatar styling
 * - Uses a realistic placeholder image URL (until your API provides the real student photo URL)
 *
 * Behavior replicated:
 * - Student Profile card always visible
 * - Search button reveals Academic Timetable card (initially hidden)
 * - Smooth scroll into timetable section after Search
 */

const avatarStyle = {
  width: 120,
  height: 120,
  objectFit: 'cover',
  borderRadius: '50%',
  border: '4px solid #e9ecef',
}

const StudentAcademicTimetable = () => {
  const student = useMemo(
    () => ({
      reg: '23MCA01',
      name: 'AJISH .A',
      programme: 'MCA',
      sem: '3 SEM',
      yearSpan: '2023 – 24',
      email: 'ajisha2023@gmail.com',
      contact: '+91 94985 95483',

      // ✅ Same pattern as StudentAcademicCalendar.jsx fileciteturn10file0
      // Replace this with your API/DB photo URL when available.
      photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    }),
    [],
  )

  const timetableRows = useMemo(
    () => [
      { day: 'Day 1', h1: 'SUB1', h2: 'SUB2', b1: '-', h3: 'SUB3', h4: 'SUB4', h5: 'SUB5', b2: '-', h6: 'SUB6' },
      { day: 'Day 2', h1: 'SUB1', h2: 'SUB2', b1: '-', h3: 'SUB3', h4: 'SUB4', h5: 'SUB5', b2: '-', h6: 'SUB6' },
      { day: 'Day 3', h1: 'SUB1', h2: 'SUB2', b1: '-', h3: 'SUB3', h4: 'SUB4', h5: 'SUB5', b2: '-', h6: 'SUB6' },
    ],
    [],
  )

  const [showTimetable, setShowTimetable] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const tableRef = useRef(null)

  useEffect(() => {
    if (showTimetable && tableRef.current) {
      try {
        tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } catch {
        // ignore
      }
    }
  }, [showTimetable])

  const onSearch = () => setShowTimetable(true)

  const onReset = () => {
    setShowTimetable(false)
    setSelectedRow(null)
  }

  return (
    <CRow>
      <CCol xs={12}>
        {/* ================= PAGE HEADER ================= */}
        <CCard className="mb-3">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Student Academic Timetable</strong>
            <CButton size="sm" color="secondary" variant="outline" onClick={onReset}>
              Reset
            </CButton>
          </CCardHeader>
        </CCard>

        {/* ================= STUDENT PROFILE ================= */}
        <CCard className="mb-3">
          <CCardHeader>
            <strong>Student Profile</strong>
          </CCardHeader>

          <CCardBody>
            <CTable bordered responsive align="middle" className="mb-0">
              <CTableBody>
                <CTableRow>
                  <CTableDataCell rowSpan={3} className="text-center align-middle" style={{ width: 160 }}>
                    <img src={student.photo} alt="Student" style={avatarStyle} />
                  </CTableDataCell>

                  <CTableDataCell>
                    <div className="fw-bold">{student.name}</div>
                  </CTableDataCell>

                  <CTableDataCell colSpan={5} />
                </CTableRow>

                <CTableRow>
                  <CTableDataCell>
                    <strong>{student.reg}</strong> | {student.programme} | {student.sem} | {student.yearSpan}
                  </CTableDataCell>
                  <CTableDataCell colSpan={5} />
                </CTableRow>

                <CTableRow>
                  <CTableDataCell>
                    {student.email} | {student.contact}
                  </CTableDataCell>
                  <CTableDataCell colSpan={5} />
                </CTableRow>
              </CTableBody>
            </CTable>

            {/* Search button row (right aligned) – matches HTML fileciteturn9file0 */}
            <div className="d-flex justify-content-end mt-3">
              <CButton size="sm" color="dark" onClick={onSearch}>
                Search
              </CButton>
            </div>
          </CCardBody>
        </CCard>

        {/* ================= ACADEMIC TIMETABLE (hidden until Search) ================= */}
        {showTimetable && (
          <CCard className="mb-3" ref={tableRef}>
            <CCardHeader>
              <strong>Academic Timetable</strong>
            </CCardHeader>

            <CCardBody>
              <CTable bordered responsive align="middle" className="mb-0 text-center">
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell style={{ width: 80 }}>Select</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 180 }}>DAY ORDER / HOUR</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 90 }}>H1</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 90 }}>H2</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 90 }}>BREAK</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 90 }}>H3</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 90 }}>H4</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 90 }}>H5</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 90 }}>BREAK</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 90 }}>H6</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  {timetableRows.map((r, idx) => (
                    <CTableRow key={r.day}>
                      <CTableDataCell>
                        <input
                          type="radio"
                          name="rowSelect"
                          checked={selectedRow === idx}
                          onChange={() => setSelectedRow(idx)}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="fw-semibold">{r.day}</CTableDataCell>
                      <CTableDataCell>{r.h1}</CTableDataCell>
                      <CTableDataCell>{r.h2}</CTableDataCell>
                      <CTableDataCell>{r.b1}</CTableDataCell>
                      <CTableDataCell>{r.h3}</CTableDataCell>
                      <CTableDataCell>{r.h4}</CTableDataCell>
                      <CTableDataCell>{r.h5}</CTableDataCell>
                      <CTableDataCell>{r.b2}</CTableDataCell>
                      <CTableDataCell>{r.h6}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        )}
      </CCol>
    </CRow>
  )
}

export default StudentAcademicTimetable
