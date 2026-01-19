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
import { ArpButton } from '../../components/common'

/**
 * Student Academic Calendar (converted from stud_calender.html)
 * Breadcrumb: Home > Setup > Student Academic Calender
 *
 * HTML behavior replicated:
 * - Student Profile card with Search button
 * - Academic Calendar card is hidden initially
 * - Clicking Search shows the Academic Calendar card and scrolls into view
 * - Calendar table rows are rendered from a seed data array
 * - ACTION column is intentionally removed (as in HTML)
 */

const avatarStyle = {
  width: 120,
  height: 120,
  objectFit: 'cover',
  borderRadius: '50%',
  border: '4px solid #e9ecef',
}

const circleBtnStyle = {
  width: 32,
  height: 32,
  padding: 0,
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const StudentAcademicCalendar = () => {
  // Student (mock) – ready for API integration
  const student = useMemo(
    () => ({
      reg: '23MCA01',
      name: 'AJISH .A',
      programme: 'MCA',
      sem: '3 SEM',
      yearSpan: '2023 – 24',
      email: 'ajisha2023@gmail.com',
      contact: '+91 94985 95483',
      photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80',
    }),
    [],
  )

  // Academic Calendar seed (mock) – structure matches the HTML script
  const academicData = useMemo(
    () => [
      {
        date: '01-07-2023',
        day: 'Monday',
        dayOrder: 'I',
        particulars: 'Commencement of III SEM Classes',
        workingDays: 1,
        eventDescription: 'Orientation & first day of class',
      },
      {
        date: '10-07-2023',
        day: 'Wednesday',
        dayOrder: 'III',
        particulars: 'Regular Working Day',
        workingDays: 1,
        eventDescription: 'Regular lecture schedule',
      },
      {
        date: '15-07-2023',
        day: 'Monday',
        dayOrder: 'V',
        particulars: 'Internal Assessment – I',
        workingDays: 0,
        eventDescription: 'Internal test – MCA III SEM',
      },
    ],
    [],
  )

  // Phase 2 visibility (hidden until Search)
  const [showCalendar, setShowCalendar] = useState(false)

  // Selection
  const [selectedIndex, setSelectedIndex] = useState(null)

  // Scroll to calendar when it becomes visible
  const calendarRef = useRef(null)
  useEffect(() => {
    if (showCalendar && calendarRef.current) {
      try {
        calendarRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } catch {
        // ignore
      }
    }
  }, [showCalendar])

  const onSearch = () => {
    setShowCalendar(true)
  }

  const onReset = () => {
    setShowCalendar(false)
    setSelectedIndex(null)
  }

  return (
    <CRow>
      <CCol xs={12}>
        {/* ================= PAGE HEADER CARD ================= */}
        <CCard className="mb-3">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Student Academic Calender</strong>

            {/* Optional: quick reset (helps testing) */}
            <CButton
              color="secondary"
              variant="outline"
              size="sm"
              style={circleBtnStyle}
              title="Reset"
              onClick={onReset}
            >
              ↺
            </CButton>
          </CCardHeader>
        </CCard>

        {/* ================= STUDENT PROFILE ================= */}
        <CCard className="mb-3">
          <CCardHeader>
            <strong>Student Profile</strong>
          </CCardHeader>

          <CCardBody>
            <CTable responsive align="middle" className="mb-0">
              <CTableBody>
                <CTableRow>
                  <CTableDataCell rowSpan={3} className="text-center" style={{ width: 160 }}>
                    <img src={student.photo} alt="avatar" style={avatarStyle} />
                  </CTableDataCell>

                  <CTableDataCell className="fw-bold">{student.name}</CTableDataCell>

                  {/* Right side actions removed (as per HTML) */}
                  <CTableDataCell colSpan={5} />
                </CTableRow>

                <CTableRow>
                  <CTableDataCell>
                    {student.reg} | {student.programme} | {student.sem} | {student.yearSpan}
                  </CTableDataCell>
                  <CTableDataCell colSpan={5}></CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableDataCell className="fw-semibold">
                    <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                      <span>
                        {student.email} | {student.contact}
                      </span>

                      <ArpButton label="Search" icon="search" color="primary" onClick={onSearch} />
                    </div>
                  </CTableDataCell>
                  <CTableDataCell colSpan={5}></CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>

        {/* ================= ACADEMIC CALENDAR (Phase 2) ================= */}
        {showCalendar && (
          <CCard className="mb-3" ref={calendarRef}>
            <CCardHeader>
              <strong>ACADEMIC CALENDAR</strong>
            </CCardHeader>

            <CCardBody>
              <CTable bordered responsive align="middle" className="mb-0 text-center">
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell style={{ width: 80 }}>SELECT</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 120 }}>DATE</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 120 }}>DAY</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 120 }}>DAY ORDER</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 260 }}>PARTICULARS</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 180 }}>NO. OF WORKING DAYS</CTableHeaderCell>
                    <CTableHeaderCell style={{ minWidth: 260 }}>EVENT DESCRIPTION</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  {academicData.length === 0 ? (
                    <CTableRow>
                      <CTableDataCell colSpan={7} className="text-center text-muted">
                        No records found
                      </CTableDataCell>
                    </CTableRow>
                  ) : (
                    academicData.map((item, idx) => (
                      <CTableRow key={`${item.date}-${idx}`}>
                        <CTableDataCell className="text-center">
                          <input
                            type="radio"
                            name="calendarSelect"
                            checked={selectedIndex === idx}
                            onChange={() => setSelectedIndex(idx)}
                          />
                        </CTableDataCell>
                        <CTableDataCell>{item.date}</CTableDataCell>
                        <CTableDataCell>{item.day}</CTableDataCell>
                        <CTableDataCell>{item.dayOrder}</CTableDataCell>
                        <CTableDataCell className="text-start">{item.particulars}</CTableDataCell>
                        <CTableDataCell>{item.workingDays}</CTableDataCell>
                        <CTableDataCell className="text-start">{item.eventDescription}</CTableDataCell>
                      </CTableRow>
                    ))
                  )}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        )}
      </CCol>
    </CRow>
  )
}

export default StudentAcademicCalendar
