import React, { useEffect, useRef, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CFormSelect,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react-pro'
import Chart from 'chart.js/auto'

const StudentAcademicAttendance = () => {
  const [category, setCategory] = useState('COURSE_WISE')
  const [visibleSection, setVisibleSection] = useState(null)
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  // ✅ Same image used in StudentAcademicTimetable.jsx
  const studentPhoto =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&q=80'

  const courseWise = [
    { code: '23-2AA-11T', name: 'Course 1', total: 100, present: 63, percent: 63 },
    { code: '23-2AA-12E', name: 'Course 2', total: 100, present: 68, percent: 68 },
    { code: '23-2AA-1FA', name: 'Course 3', total: 100, present: 84, percent: 84 },
    { code: '23-2AA-1FB', name: 'Course 4', total: 100, present: 43, percent: 43 },
    { code: '23-2AA-13A', name: 'Course 5', total: 100, present: 71, percent: 71 },
  ]

  const absentLog = [
    { date: '01-12-2023', day: 'Day 1', course: '23-2AA-11T - Course 1', period: '3rd Period' },
    { date: '05-12-2023', day: 'Day 3', course: '23-2AA-12E - Course 2', period: '2nd Period' },
    { date: '11-12-2023', day: 'Day 5', course: '23-2AA-1FA - Course 3', period: '1st and 2nd Period' },
  ]

  const presentMonth = [
    { label: 'Total Working Days', value: '18 Days' },
    { label: 'Days Present', value: '11 Days' },
    { label: 'Attendance Percentage', value: '58%' },
    { label: 'Semester and Month', value: 'Current Semester - December 2023' },
  ]

  const overall = [
    { label: 'Total Working Days', value: '90 Days' },
    { label: 'Days Present', value: '48 Days' },
    { label: 'Attendance Percentage', value: '58%' },
    { label: 'Semester and Academic Year', value: 'Current Semester - 2023-2024' },
  ]

  useEffect(() => {
    if (visibleSection !== 'COURSE_WISE') return

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: courseWise.map((c) => c.code),
        datasets: [
          {
            label: 'Attendance Percentage',
            data: courseWise.map((c) => c.percent),
          },
        ],
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              callback: (value) => value + '%',
            },
          },
        },
      },
    })
  }, [visibleSection])

  return (
    <>
      {/* ================= STUDENT PROFILE ================= */}
      <CCard className="mb-3">
        <CCardHeader>
          <strong>Student Academic Attendance</strong>
        </CCardHeader>

        <CCardBody>
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableDataCell rowSpan={3} className="text-center" style={{ width: '12%' }}>
                  <img
                    src={studentPhoto}
                    alt="Student"
                    style={{
                      width: 110,
                      height: 110,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid #e9ecef',
                    }}
                  />
                </CTableDataCell>

                <CTableDataCell colSpan={5}>
                  <strong>AJISH A</strong>
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell colSpan={5}>
                  23MCA01 | MCA | Semester 3 | 2023-2024
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>
                  ajisha2023@gmail.com | +91 98075 90786
                </CTableDataCell>

                <CTableDataCell>
                  <strong>Profile Category</strong>
                </CTableDataCell>

                <CTableDataCell colSpan={2}>
                  <CFormSelect
                    size="sm"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="COURSE_WISE">COURSE WISE</option>
                    <option value="ABSENT_LOG">ABSENT LOG</option>
                    <option value="PRESENT_MONTH">PRESENT MONTH</option>
                    <option value="OVERALL">OVERALL</option>
                  </CFormSelect>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <CButton size="sm" onClick={() => setVisibleSection(category)}>
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* ================= COURSE WISE ================= */}
      {visibleSection === 'COURSE_WISE' && (
        <CCard className="mb-3">
          <CCardHeader>Course Wise Attendance</CCardHeader>
          <CCardBody>
            <CTable bordered small>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Course Code</CTableHeaderCell>
                  <CTableHeaderCell>Course Name</CTableHeaderCell>
                  <CTableHeaderCell>Total</CTableHeaderCell>
                  <CTableHeaderCell>Present</CTableHeaderCell>
                  <CTableHeaderCell>Percentage</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {courseWise.map((c, i) => (
                  <CTableRow key={i}>
                    <CTableDataCell>{c.code}</CTableDataCell>
                    <CTableDataCell>{c.name}</CTableDataCell>
                    <CTableDataCell>{c.total}</CTableDataCell>
                    <CTableDataCell>{c.present}</CTableDataCell>
                    <CTableDataCell>{c.percent}%</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

            <h6 className="text-center mt-4">Attendance Percentage</h6>
            <canvas ref={chartRef} />

            <CButton
              size="sm"
              color="secondary"
              className="mt-3"
              onClick={() => setVisibleSection(null)}
            >
              Close
            </CButton>
          </CCardBody>
        </CCard>
      )}

      {/* ================= ABSENT LOG ================= */}
      {visibleSection === 'ABSENT_LOG' && (
        <CCard className="mb-3">
          <CCardHeader>Absent Log</CCardHeader>
          <CCardBody>
            <CTable bordered small>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Date</CTableHeaderCell>
                  <CTableHeaderCell>Day Order</CTableHeaderCell>
                  <CTableHeaderCell>Course</CTableHeaderCell>
                  <CTableHeaderCell>Absent Period</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {absentLog.map((a, i) => (
                  <CTableRow key={i}>
                    <CTableDataCell>{a.date}</CTableDataCell>
                    <CTableDataCell>{a.day}</CTableDataCell>
                    <CTableDataCell>{a.course}</CTableDataCell>
                    <CTableDataCell>{a.period}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

            <CButton
              size="sm"
              color="secondary"
              className="mt-3"
              onClick={() => setVisibleSection(null)}
            >
              Close
            </CButton>
          </CCardBody>
        </CCard>
      )}

      {/* ================= PRESENT MONTH ================= */}
      {visibleSection === 'PRESENT_MONTH' && (
        <CCard className="mb-3">
          <CCardHeader>Present Month</CCardHeader>
          <CCardBody>
            <CTable bordered small>
              <CTableBody>
                {presentMonth.map((p, i) => (
                  <CTableRow key={i}>
                    <CTableHeaderCell>{p.label}</CTableHeaderCell>
                    <CTableDataCell>{p.value}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

            <CButton
              size="sm"
              color="secondary"
              className="mt-3"
              onClick={() => setVisibleSection(null)}
            >
              Close
            </CButton>
          </CCardBody>
        </CCard>
      )}

      {/* ================= OVERALL ================= */}
      {visibleSection === 'OVERALL' && (
        <CCard>
          <CCardHeader>Overall Attendance</CCardHeader>
          <CCardBody>
            <CTable bordered small>
              <CTableBody>
                {overall.map((o, i) => (
                  <CTableRow key={i}>
                    <CTableHeaderCell>{o.label}</CTableHeaderCell>
                    <CTableDataCell>{o.value}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

            <CButton
              size="sm"
              color="secondary"
              className="mt-3"
              onClick={() => setVisibleSection(null)}
            >
              Close
            </CButton>
          </CCardBody>
        </CCard>
      )}
    </>
  )
}

export default StudentAcademicAttendance
